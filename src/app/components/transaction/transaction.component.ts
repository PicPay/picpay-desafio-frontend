import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { TransactionService } from 'src/app/services/transaction-service/transaction.service';

import { TransactionState } from 'src/app/models/transaction-state';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit, OnDestroy {
  componentIsActive: boolean;
  transactionState: TransactionState;

  constructor(private transactionService: TransactionService) { 
    this.componentIsActive = true;
  }

  ngOnInit() {
    this.transactionService
      .getTransactionState()
      .pipe(
        takeWhile( () => this.componentIsActive )
      )
      .subscribe({
        next: transactionState => this.transactionState = transactionState
      })
  }

  isTransactionProcessInCourse(): boolean {
    return this.transactionState !== TransactionState.noTransaction 
  }
  isOnTransaction(): boolean {
    return this.transactionState === TransactionState.onTransaction
  }
  isTransactionSucceeded(): boolean {
    return this.transactionState === TransactionState.transactionSucceeded
  }
  isTransactionFailed(): boolean {
    return this.transactionState === TransactionState.transactionFailed
  }

  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
