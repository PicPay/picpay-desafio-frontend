import { HttpClientModule } from '@angular/common/http';
import { async, inject, TestBed } from '@angular/core/testing';
import { Card } from '@app/models/card/card.model';
import { Transaction } from '@app/models/transaction/transaction.model';
import { TransactionResponse } from '@app/models/transactionResponse/transaction-response.model';

import { TransactionService } from '@services/transaction/transaction.service';
import { Observable } from 'rxjs';

describe('TransactionService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: TransactionService = TestBed.get(TransactionService);
    expect(service).toBeTruthy();
  });

  it('should not return null on postTransaction()', inject([TransactionService], (transactionService: TransactionService) => {
    const transaction: Transaction = { card: new Card() } as Transaction;
    const result: Observable<TransactionResponse> = transactionService.postTransaction(transaction);
    expect(result).not.toBeNull();
  }));

});
