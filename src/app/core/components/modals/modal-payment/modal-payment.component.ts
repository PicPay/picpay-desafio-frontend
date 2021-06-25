import { Component, OnInit, Inject } from '@angular/core';
import { TransactionPayload } from 'src/app/shared/models/transaction-payload.model';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Cards } from 'src/app/shared/mocks/cards.mock';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionsService } from 'src/app/core/services/transactions/transactions.service';
import { ModalPaymentResponseComponent } from 'src/app/core/components/modals/modal-payment-response/modal-payment-response.component';

@Component({
  selector: 'app-modal-payment',
  templateUrl: './modal-payment.component.html',
  styleUrls: ['./modal-payment.component.scss']
})
export class ModalPaymentComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private transactionsService: TransactionsService,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  public selectedCard: TransactionPayload;
  public valuePay: number;
  public cards = Cards;
  public cardsLastDigits = [];
  
  formPayment: FormGroup;

  ngOnInit() {
    this.cardLastDigits();
  }

  cardLastDigits() {
    for(var i = 0; i < this.cards.length; i++) {
      this.cardsLastDigits[i] = this.cards[i];
      this.cardsLastDigits[i].lastDigits = this.cards[i].card_number.substr(12,4);
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
        this.dialog.open(ModalPaymentResponseComponent, {
          data: {success: true}
        });
      } else {
        this.dialog.open(ModalPaymentResponseComponent, {
          data: {success: false}
        });
      }
    })
  }

}
