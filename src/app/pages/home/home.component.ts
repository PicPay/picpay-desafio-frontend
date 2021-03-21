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

  // TODO: Create a way of closing the modal (also applying it to clicking the backdrop)
  isComponentActive: boolean;

  cards: Card[];
  transactionStage: TransactionStage;

  constructor(private transactionService: TransactionService) {

    this.cards = [
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

    this.isComponentActive = true;
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
