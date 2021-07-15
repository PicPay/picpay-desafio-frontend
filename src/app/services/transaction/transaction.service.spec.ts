import { TestBed, getTestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TransactionService } from './transaction.service';

describe('Service: Transaction', () => {
  let injector: TestBed;
  let service: TransactionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransactionService]
    });
    injector = getTestBed();
    service = injector.get(TransactionService);
    httpMock = injector.get(HttpTestingController);
  });

  it ('#post should return success true', () => {
    const mockedPayload = {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
      destination_user_id: 1,
      value: 5
    };

    service.payUser(mockedPayload).subscribe(result => {
      expect(result).toContain({ success: true });
      expect(result).toContain({ status: 'Aprovada' });
    });
  });
});
