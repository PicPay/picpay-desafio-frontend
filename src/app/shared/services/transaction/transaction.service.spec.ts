import { TestBed } from '@angular/core/testing';
import { ApiService } from '@core/services/api/api.service';
import { TranslateService } from '@ngx-translate/core';
import {
  MOCK_TRANSACTION,
  MOCK_TRANSACTION_PAYLOAD
} from '@shared/mocks/transaction/transaction.mock';
import { of } from 'rxjs';
import { MOCK_INVALID_CARD } from './../../mocks/card/card.mock';
import { TransactionService } from './transaction.service';
import { TRANSACTION_SERVICE_VOCABULARY } from './transaction.service.vocabulary';

describe('TransactionService', () => {
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let transactionService: TransactionService;

  let translateServiceSpy: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['post']);
    translateServiceSpy = jasmine.createSpyObj('TranslateService', ['instant']);
    TestBed.configureTestingModule({
      providers: [
        { provide: TranslateService, useValue: translateServiceSpy },
        { provide: ApiService, useValue: apiServiceSpy },
        TransactionService,
      ],
    });
    transactionService = TestBed.get(TransactionService);
  });

  it('should send post transaction', () => {
    apiServiceSpy.post.and.returnValue(of(MOCK_TRANSACTION));
    transactionService
      .postTransaction(MOCK_TRANSACTION_PAYLOAD)
      .subscribe((transaction) => {
        expect(transaction.success).toBeTruthy();
      });
  });

  it('should return invalid card error', () => {
    transactionService.verifyCard(MOCK_INVALID_CARD.toString()).subscribe(
      () => {},
      (err) => {
        expect(err.status).toBeTruthy();
        expect(err.status).toContain(
          TRANSACTION_SERVICE_VOCABULARY.invalidCard
        );
      }
    );
  });
});
