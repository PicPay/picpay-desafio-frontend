import { Component, OnInit, Inject } from '@angular/core';
import { TransactionPayload } from 'src/app/shared/models/transaction.model';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { cards } from 'src/app/shared/mocks/cards.mock';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';
import { ModalResponsePaymentComponent } from '../modal-response-payment/modal-response-payment.component';

@Component({
  selector: 'app-modal-payment',
  templateUrl: './modal-payment.component.html',
  styleUrls: ['./modal-payment.component.scss']
})
export class ModalPaymentComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private transactionsService: TransactionService,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  public selectedCard: TransactionPayload;
  public valuePay: number;
  public cards = cards;
  public cardsEndValues = [];
  
  formPayment: FormGroup;

  ngOnInit() {
    this.cardEndValues();
  }

  cardEndValues() {
    for(var i = 0; i < this.cards.length; i++) {
      this.cardsEndValues[i] = this.cards[i];
      this.cardsEndValues[i].endValue = this.cards[i].card_number.substr(12,4);
    }
  }

  createForm() {
    this.formPayment = this.fb.group({
      valuePay: ['', Validators.required ],
      selectedCard: ['', Validators.required ]
    });
  }

  transaction() {
    let payload: TransactionPayload = {
      card_number: this.selectedCard.card_number,
      cvv: this.selectedCard.cvv,
      expiry_date: this.selectedCard.expiry_date,
      destination_user_id: this.data.user.id,
      value: this.valuePay,
    }

    this.transactionsService.payment(payload).subscribe(() => {
      this.dialog.closeAll();

      if(payload.card_number === "1111111111111111") {
        this.dialog.open(ModalResponsePaymentComponent, {
          data: {success: true}
        });
      } else {
        this.dialog.open(ModalResponsePaymentComponent, {
          data: {success: false}
        });
      }
    })
  }

}
