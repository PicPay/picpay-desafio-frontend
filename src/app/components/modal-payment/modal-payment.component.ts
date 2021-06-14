import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TransactionService } from 'src/app/services/transaction-service/transaction.service';

@Component({
  selector: 'app-modal-payment',
  templateUrl: './modal-payment.component.html',
  styleUrls: ['./modal-payment.component.scss']
})
export class ModalPaymentComponent implements OnInit {
  @Output() onPaymentRequest = new EventEmitter<TransactionPayload>();
  user: User;
  value: number = 0;
  valueError: boolean = false;
  form: FormGroup;
  cardSelected: CreditCard;
  cards: Array<CreditCard> = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
      flag: "../../assets/mastercard.svg"
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
      flag: "../../assets/visa.png"
    }
  ];

  constructor(
    private bsModalRef: BsModalRef,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formInit();
  }

  formInit(){
    this.form = this.formBuilder.group({
      value: [null, [Validators.min(0), Validators.max(100000), Validators.required]],
      card: [null, [Validators.required]]
    });

    this.form.get('card')
      .valueChanges
      .subscribe((card) =>{
        this.cardSelected = card;
      });

    this.form.get('value')
      .valueChanges
      .subscribe((value) =>{
        if(value > 0)
          this.valueError = false;
      });

    this.form.get("card").setValue(this.cards[0]);
    this.form.get("value").setValue(0);
  }

  getLastDigits(card: CreditCard) {
    return card.card_number.slice(-4);
  }

  selectCard(card: CreditCard){
    this.cardSelected = card;
  }

  payment(){
    const value = this.form.get("value").value;
    this.valueError = value <= 0;

    if(!this.valueError){
      const payload: TransactionPayload ={
        card_number: this.cardSelected.card_number,
        cvv: this.cardSelected.cvv,
        expiry_date: this.cardSelected.expiry_date,
        destination_user_id: this.user.id,
        value: value
      };

      this.bsModalRef.hide();

      this.onPaymentRequest.emit(payload);
    }
  }

  close() {
      this.bsModalRef.hide();
  }
}
