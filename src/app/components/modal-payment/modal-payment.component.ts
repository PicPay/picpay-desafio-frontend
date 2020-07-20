import { CreditCard } from 'src/app/models/credit-card.model';
import { Payment } from 'src/app/models/payment.model';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { Component, OnInit, Inject, Optional, } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ModalSuccessErrorComponent } from '../modal-success-error/modal-success-error.component';
import { PaymentReturn } from 'src/app/models/payment-return.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PaymentForm } from 'src/app/models/payment-form.model';

@Component({
  selector: 'app-modal-payment',
  templateUrl: './modal-payment.component.html',
  styleUrls: ['./modal-payment.component.scss'],
})
export class ModalPaymentComponent implements OnInit {

  constructor(private paymentService: PaymentService,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<ModalPaymentComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: User,
              private fb: FormBuilder) { }

  cards: Array<CreditCard> = [];
  // selectedCard: CreditCard;
  // value: string;
  message: string;
  responseStatus: PaymentReturn;
  formPayment: FormGroup;
  form: PaymentForm = new PaymentForm();

  ngOnInit() {
    this.loadCreditCards();
    this.formPayment = new FormGroup({
      moneyValue: new FormControl('', [Validators.required, Validators.minLength(2)]),
      selectedCard: new FormControl('', [Validators.required])
    });
  }

  async openSuccessOrErrorModal() {
    const isValidCard = this.paymentService.validCreditCard(this.form.selectedCard);
    if (isValidCard) {
      const payment: Payment = {
        cardNumber: this.form.selectedCard.card_number,
        ccv: this.form.selectedCard.cvv,
        expireDate: this.form.selectedCard.expire_date,
        destinationUserId: this.data.id,
        value: Number.parseFloat(this.form.moneyValue),
      };
      await this.postSendPayment(payment);
      this.message = 'O Pagamento foi concluído com sucesso!';
    } else {
      this.message = 'O Pagamento não foi concluído com sucesso!';
    }
    const dialogRef = this.dialog.open(ModalSuccessErrorComponent, {
      width: '500px',
      data: this.message
    });
    this.cancelar();
  }

  postSendPayment(payment: Payment) {
    this.paymentService.processPayment(payment).subscribe(
      response => {
        this.responseStatus = response;
      });
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  private loadCreditCards(): void {
    this.cards = [
      {
        card_number: '1111111111111111',
        expire_date: '01/18',
        cvv: 789,
      },
      {
        card_number: '4111111111111234',
        expire_date: '01/20',
        cvv: 123,
      }];
  }


}
