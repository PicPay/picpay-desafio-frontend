import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CardModel } from 'src/app/models/card-model';
import { CardService } from 'src/app/services/card.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit {
  cards: CardModel[] = [];
  paymentForm: FormGroup = new FormGroup({
    value: new FormControl(null, [
      Validators.required,
      this.greaterThanZero()
    ]),
    card: new FormControl(null, [
      Validators.required
    ])
  });
  maskOptions = {
    allowNegative: false,
    decimal: ',',
    thousands: '.',
    prefix: 'R$ ',
    align: 'left',
    nullable: true
  }

  constructor(
    private _cardService: CardService,
    private _paymentService: PaymentService,
    @Inject('MODAL_DATA') public user: any
  ) { }

  ngOnInit() {
    this._cardService.getCards$().subscribe(
      result => {
        this.cards = result;
      }
    );
  }

  greaterThanZero(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      console.log(control.value, control.value >= 0 ? null : {invalidNumber: {value: control.value}})
      return control.value > 0 ? null : {invalidNumber: {value: control.value}};
    };
  }

  pay() {
    const {
      cardNumber,
      cvv,
      expiryDate
    } = this.paymentForm.get('card').value;
    
    this._paymentService.pay$({
      cardNumber,
      cvv,
      expiryDate,
      destinationUserId: this.user.id,
      value: this.paymentForm.get('value').value
    })
  }
}
