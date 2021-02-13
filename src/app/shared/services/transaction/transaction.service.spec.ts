import { TestBed } from '@angular/core/testing';
import { ApiService } from '@core/services/api/api.service';
import { MOCK_TRANSACTION_API_RESULT, MOCK_TRANSACTION_PAYLOAD } from '@shared/mocks/transaction/transaction.mock';
import { of } from 'rxjs';
import {
  TransactionService
} from './transaction.service';

describe('TransactionService', () => {
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let transactionService: TransactionService;

  beforeEach(() => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['post']);
    TestBed.configureTestingModule({
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        TransactionService,
      ],
    });
    transactionService = TestBed.get(TransactionService);
  });

  it('should send post transaction', () => {
    apiServiceSpy.post.and.returnValue(of(MOCK_TRANSACTION_API_RESULT));
    transactionService.postTransaction(MOCK_TRANSACTION_PAYLOAD).subscribe((transaction) => {
      expect(transaction).toBeTruthy();
      expect(typeof transaction).toBe('object');
      expect(transaction.destination_user.id).toEqual(MOCK_TRANSACTION_PAYLOAD.destination_user_id);
    });
  });
});
