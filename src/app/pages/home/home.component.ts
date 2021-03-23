import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { Card } from '../../models/card';
import { TransactionStage } from '../../models/transaction-state';

import { TransactionService } from '../../services/transaction-service/transaction.service';
import { UsersService } from '../../services/users-service/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ UsersService, TransactionService ]
})
export class HomeComponent implements OnInit, OnDestroy {
  isComponentActive: boolean;

  cards: Card[];
  transactionStage: TransactionStage;

  constructor(private transactionService: TransactionService) {
    this.isComponentActive = true;

    this.cards = [
      {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
      },
      {
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
      },
    ];

  }

  ngOnInit() {
    this.transactionService
      .getTransactionStage()
      .pipe( 
        takeWhile( () => this.isComponentActive )
      )
      .subscribe({
        next: transactionStage => this.transactionStage = transactionStage 
      })
  }

  isTransactionInitiated() {
    return this.transactionStage !== TransactionStage.noTransaction
  }

  ngOnDestroy() {
    this.isComponentActive = false;
  }

}
