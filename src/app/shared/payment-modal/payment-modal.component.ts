import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { TransactionPayload } from "src/app/payments/interfaces/payment";
import { PaymentService } from "src/app/payments/services/payment.service";
let cards = [
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

@Component({
    selector: 'app-modal',
    templateUrl: './payment-modal.component.html',
    styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit{
  valid_card = '1111111111111111';
  cardList = [];
  paymentForm: FormGroup;
    constructor(
        public dialogRef: MatDialogRef<PaymentModalComponent>,
        @Inject(MAT_DIALOG_DATA) private modalData: any,
        private paymentService: PaymentService,
        private fb: FormBuilder
    ){
    }
    ngOnInit(): void {
      this.cardList = cards
        this.paymentForm = this.fb.group({
          payment_value:[ '', [Validators.required]],
          payment_card:['', [Validators.required]],
          destination_user_id:[this.modalData.id],
          cvv:[''],
          expiry_date:['']
      })
    }
    getInfo(i){
       this.paymentForm.controls['payment_card'].setValue(cards[i].card_number)
       this.paymentForm.controls['cvv'].setValue(cards[i].cvv)
       this.paymentForm.controls['expiry_date'].setValue(cards[i].expiry_date)
    }
    payment(){
      if(this.paymentForm.get('payment_card').value == this.valid_card){
        this.paymentService.payment(this.paymentForm.value).subscribe(
          success => {
              console.log('cartao valido')
          },
          err => console.log(err)
        )
      } else {
        console.log('cartao invalido')
      }
      console.log(this.paymentForm.value)
    }


}