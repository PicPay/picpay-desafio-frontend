import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CardModel } from 'src/app/models/card-model';
import { ModalRef } from 'src/app/models/modal-ref';
import { CardService } from 'src/app/services/card.service';
import { ModalService } from 'src/app/services/modal.service';
import { PaymentService } from 'src/app/services/payment.service';
import { ReceiptModalComponent } from '../receipt-modal/receipt-modal.component';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit {
  cards: CardModel[] = [];
  isLoading: boolean = false;
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
    public modalRef: ModalRef,
    private _modalService: ModalService,
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
      return control.value > 0 ? null : {invalidNumber: {value: control.value}};
    };
  }

  pay() {
    const {
      cardNumber,
      cvv,
      expiryDate
    } = this.cards.find(item => item.cardNumber === this.paymentForm.get('card').value);
    
    this.isLoading = true;
    this._paymentService.pay$({
      cardNumber,
      cvv,
      expiryDate,
      destinationUserId: this.user.id,
      value: this.paymentForm.get('value').value
    }).subscribe(
      result => {
        this.isLoading = false;
        this.modalRef.hide();
        this._modalService.open(ReceiptModalComponent, result.success)
      }
    )
  }
}
