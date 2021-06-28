import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Card } from 'src/app/models/card';
import { TransactionService } from 'src/app/services/transaction.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.scss']
})
export class TransactionModalComponent implements OnInit {

  @Input() receiver: User;
  @Output() close = new EventEmitter();

  cardsList: Card[] = new Array<Card>();

  transactionFormGroup = new FormGroup({
    value: new FormControl('', Validators.required),
    selectedCard: new FormControl('', Validators.required)
  });


  constructor(private userService: UserService, private transactionService: TransactionService) { }

  ngOnInit() {
    this.userService.GetCards().subscribe(cards => {
      this.cardsList = cards;
    });
  }

  emitClose(recipt?: boolean, transactionStatus?: boolean, transactionInfo?){
    this.close.emit(
      {
        'modal': false,
        'recipt': recipt,
        'status': transactionStatus,
        'receiver': transactionInfo.receiver,
        'value': transactionInfo.value
      }
    );
  }

  add(add: number){
    const rawValue = this.transactionFormGroup.getRawValue();
    const newValue = (+rawValue.value) + add;

    this.transactionFormGroup.controls['value'].setValue(newValue);
  }

  pay(){
    let transaction: TransactionPayload = {
      card_number: null,
      cvv: null,
      expiry_date: null,
      destination_user_id: this.receiver.id,
      value: null
    };

    transaction.card_number = this.transactionFormGroup.controls['selectedCard'].value;
    transaction.cvv = this.cardsList.filter(card => card.card_number === this.transactionFormGroup.controls['selectedCard'].value)[0].cvv;
    transaction.expiry_date = this.cardsList.filter(card => card.card_number === this.transactionFormGroup.controls['selectedCard'].value)[0].expiry_date;

    transaction.value = this.transactionFormGroup.controls['value'].value;

    const transactionInfo = {
      'receiver': this.receiver.username,
      'value': transaction.value
    }

    this.transactionService.PostTransaction(transaction).subscribe(data => {
      this.emitClose(true, true, transactionInfo);
    }, err => {
      console.log(err);
    })
  }

}
