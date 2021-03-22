import {HttpClient} from '@angular/common/http';
import {async, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
import {CreditCard} from '../../models/credit-card.model';
import {TransactionPayload} from '../../models/transaction-payload.model';
import {TransactionResponse} from '../../models/transaction-response.model';

import {TransactionService} from './transaction.service';

describe('TransactionService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let transactionService: TransactionService;

  const testCards: CreditCard[] = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  const testPayloadApproved: TransactionPayload = {
    card_number: '1111111111111111',
    cvv: 789,
    expiry_date: '01/18',
    destination_user_id: 1001,
    value: 10.0,
  };

  const testPayloadRejected: TransactionPayload = {
    card_number: '4111111111111234',
    cvv: 123,
    expiry_date: '01/20',
    destination_user_id: 1001,
    value: 10.0,
  };

  const testPayloadInvalid: TransactionPayload = {
    card_number: '4111111111111234',
    cvv: 123,
    expiry_date: '01/20',
    destination_user_id: 1001,
    value: -10.0,
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }],
    });

    transactionService = TestBed.get(TransactionService);
  });

  it('should be created', () => {
    expect(transactionService).toBeTruthy();
  });

  it('#getCards should return an Observable of Credit Cards', async(() => {
    transactionService
      .getCards()
      .subscribe((cards) => expect(cards).toEqual(testCards));
  }));

  it('#doTransaction should return an Observable with the HttpClient#post approval response', () => {
    const expectedResponseApproved: TransactionResponse = {
      success: true,
      status: 'Aprovada',
    };

    httpClientSpy.post.and.returnValue(of(expectedResponseApproved));

    transactionService
      .doTransaction(testPayloadApproved)
      .subscribe((response) => expect(response).toEqual(expectedResponseApproved));

    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  });

  it('#doTransaction should return an Observable with the HttpClient#post rejection response', () => {
    const expectedResponseRejected: TransactionResponse = {
      success: false,
      status: 'Negada',
    };

    httpClientSpy.post.and.returnValue(of(expectedResponseRejected));

    transactionService
      .doTransaction(testPayloadRejected)
      .subscribe((response) => expect(response).toEqual(expectedResponseRejected));

    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  });

  it('#doTransaction should return an Response without calling HttpClient#post if the payload is invalid', () => {
    const expectedResponse: TransactionResponse = {
      success: false,
      status: 'Negada',
    };

    transactionService
      .doTransaction(testPayloadInvalid)
      .subscribe((response) => expect(response).toEqual(expectedResponse));

    expect(httpClientSpy.post.calls.count()).toBe(0, 'no calls');
  });
});
