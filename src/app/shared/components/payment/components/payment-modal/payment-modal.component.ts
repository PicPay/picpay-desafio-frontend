import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageService } from 'src/app/core/services/message-service/message.service';
import { PaymentService } from 'src/app/core/services/payment-service/payment.service';

import Card from 'src/app/shared/models/payment/card.model';
import Payment from 'src/app/shared/models/payment/payment.model';
import User from 'src/app/shared/models/user/user.model';

@Component({
  selector: 'pp-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit {

  payment: Payment
  savedCards: Array<Card>
  recipient: User
  paymentForm: FormGroup
  isPaying: boolean

  get isPaymentFormValid(): boolean {
    return this.paymentForm.valid;
  }
  get value(): number { return this.paymentForm.get('value').value }
  get card(): Card { return this.paymentForm.get('card').value }
  currencyMask = {
    align: "left",
    allowZero: true,
    decimal: ",",
    precision: 2,
    prefix: "R$ ",
    thousands: ".",
    nullable: true
  }

  constructor(
    public dialogRef: MatDialogRef<PaymentModalComponent>,
    private paymentService: PaymentService,
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ) {
    this.isPaying = false
    this.recipient = this.paymentService.data.selectedRecipient
    this.paymentForm = this.formBuilder.group({
      value: new FormControl('', Validators.required),
      card: new FormControl('', Validators.required)
    })
  }
  ngOnInit(): void {
    this.retrieveSavedCards()
  }


  onNoClick(): void {
    this.paymentService.data.isDisplayingPaymentModal = false
    this.dialogRef.close();
  }

  async retrieveSavedCards() {
    await this.paymentService.retrieveSavedCards()
    this.savedCards = this.paymentService.data.savedCards
  }

  async pay() {
    this.payment = new Payment(this.card, this.recipient.id, this.value)
    this.isPaying = true
    this.paymentForm.disable()
    try {
      await this.paymentService.pay(this.payment)
      this.finishPayment()
    } catch (e) {
      this.messageService.displayMessage('Recibo de pagamento', 'O pagamento <b>não</b> foi concluído com sucesso.')
    } finally {
      this.isPaying = false
      this.paymentForm.enable()
    }
  }

  finishPayment(){
    this.dialogRef.close();
    this.messageService.displayMessage('Recibo de pagamento', 'O pagamento foi concluído com sucesso.')
  }

}
export interface DialogData {
  recipient: User;
}
