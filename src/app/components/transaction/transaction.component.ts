import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {trigger, style, animate, transition} from '@angular/animations';
import { takeWhile, tap } from 'rxjs/operators';

import { TransactionService } from 'src/app/services/transaction-service/transaction.service';

import { TransactionStage } from 'src/app/models/transaction-state';
import { User } from 'src/app/models/user';
import { Card } from 'src/app/models/card';
import { uReverse } from 'src/app/util/functions/generalUtilities';
import { TransactionPayload } from 'src/app/models/transaction-payload';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  animations: [
    trigger('FadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('1s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
})
export class TransactionComponent implements OnInit, OnDestroy {
  componentIsActive: boolean;
  screenWidth = window.innerWidth;

  @Input() cards: Card[];
  transactionStage: TransactionStage;
  transactionUser: User; 

  transactionForm: FormGroup;

  constructor (
    public transactionService: TransactionService,
    private formBuilder: FormBuilder
  ) { 
      this.componentIsActive = true;
  }

  ngOnInit() {
    this.transactionService
      .getTransactionStage()
      .pipe(
        takeWhile( () => this.componentIsActive )
      )
      .subscribe({
        next: transactionStage => this.transactionStage = transactionStage
      });

    this.transactionService
      .getTransactionUser()
      .pipe(
        takeWhile( () => this.componentIsActive )
      )
      .subscribe({
        next: transactionUser => this.transactionUser = transactionUser
      });
    
    const defaultCard = this.cards.find( card => this.endCharactersOf(card.card_number) === '1234'  )
    this.transactionForm = this.formBuilder
      .group({
        value: [0, [Validators.required, Validators.min(1)] ],
        card: [defaultCard , [Validators.required] ]
      });

  }

  isOnTransaction(): boolean {
    return this.transactionStage === TransactionStage.onTransaction
      || this.transactionStage === TransactionStage.processingTransaction
  }
  isProcessingTransaction(): boolean {
    return this.transactionStage === TransactionStage.processingTransaction
  }
  isTransactionSucceeded(): boolean {
    return this.transactionStage === TransactionStage.transactionSucceeded
  }
  isTransactionFailed(): boolean {
    return this.transactionStage === TransactionStage.transactionFailed
  }

  endCharactersOf(word: string) {
    return uReverse(uReverse(word).substr(0, 4));
  }
  changeFirstCharsToStars( cardNumber: string): string {
    const [firstSlice, secondSlice] = cardNumber.match(/.{1,12}/gm);
    const maskedFirstSlice = firstSlice.replace(/./gm, '*');
    const cardNumberWithStars = [ maskedFirstSlice, secondSlice].join('');
    const cardNumberWithStarsFormatted = cardNumberWithStars.match(/.{4}/gm).join(' ');

    return cardNumberWithStarsFormatted;
  }

  ngOnDestroy() {
    this.componentIsActive = false;
  }

  pay() {
    if(this.transactionForm.valid) {

      this.transactionService.startLoadingProcessTransaction();

      const { value: paymentValue, card } = JSON.parse(JSON.stringify(this.transactionForm.value)) as { value: number; card: Card };
      const { id: userId } = this.transactionUser;

      if(card.card_number !== '4111111111111234') {

        const payload = {
          ...card,
          value: paymentValue,
          destination_user_id: userId
        } as TransactionPayload;

        this.transactionService
          .processTransaction(payload)
          .subscribe({
            next: () => this.transactionService.competeTransactionSucceeded()
          });
      } else {
        this.transactionService.completeTransactionFailed();
      }
    } else {
      this.transactionForm.markAllAsTouched();
      this.transactionForm.updateValueAndValidity();
    }
  }

}
