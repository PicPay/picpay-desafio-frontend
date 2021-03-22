import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { takeWhile, tap } from 'rxjs/operators';

import { TransactionService } from 'src/app/services/transaction-service/transaction.service';

import { TransactionStage } from 'src/app/models/transaction-state';
import { User } from 'src/app/models/user';
import { Card } from 'src/app/models/card';
import { uReverse } from 'src/app/util/functions/generalUtilities';
import { TransactionPayload } from 'src/app/models/transaction-payload';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit, OnDestroy {
  componentIsActive: boolean;

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
        next: transactionState => this.transactionStage = transactionState
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
        value: [0, [Validators.required] ],
        card: [defaultCard , [Validators.required] ]
      });

    // this.transactionForm.valueChanges.subscribe( e  => {
    //   console.log('valueChanges event: ', e);
    //   console.log('this.transactionForm.value: ', this.transactionForm.value);
    // })
  }

  isOnTransaction(): boolean {
    return this.transactionStage === TransactionStage.onTransaction
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
      console.log('[transaction.component.ts] transactionForm.value : ', this.transactionForm.value);

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
          .pipe(
            tap( res => console.log(res) )
          )
          .subscribe({
            next: () => this.transactionService.competeTransactionSucceeded()
          });
      } else {
        this.transactionService.completeTransactionFailed();
        console.error('A transação falhou, visto que foi utilizado um cartão inválido.');
      }
    } else {
      this.transactionForm.markAsTouched();
      this.transactionForm.updateValueAndValidity();
    }
  }

}
