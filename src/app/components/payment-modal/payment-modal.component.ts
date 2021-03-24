import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CardModel } from 'src/app/models/card-model';
import { CardService } from 'src/app/services/card.service';

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
      Validators.min(0)
    ]),
    card: new FormControl(null, [
      Validators.required
    ])
  });
  maskOptions = {
    allowNegative: false,
    decimal: ',',
    thousands: '.',
    prefix: 'R$ '
  }

  constructor(private _cardService: CardService) { }

  ngOnInit() {
    this._cardService.getCards$().subscribe(
      result => {
        this.cards = result;
      }
    );
  }
}
