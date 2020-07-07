import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { PaymentService } from '../service/payment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentResponseStatus, TransactionPayload } from '../models';
import { map } from 'rxjs/operators'

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-users-pay-dialog',
  templateUrl: './users-pay-dialog.component.html',
  styleUrls: ['./users-pay-dialog.component.scss']
})
export class UsersPayDialogComponent {

  @ViewChild("template", { static: false }) confirmPaymentModalTemplate;

  cards = [
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

  @Input() name: string
  @Input() id: number

  modalRef: BsModalRef;
  isApproved: boolean;
  payForm: FormGroup = this.formBuilder.group({
    payValue: ["10", Validators.required],
    selectedCard: [null, Validators.required]
  });
  

  constructor(
    private modalService: BsModalService, 
    private paymentService: PaymentService,
    private formBuilder: FormBuilder) {
      console.log('pay form', this.payForm)
    }


  payUser() {
    const { value: { payValue, selectedCard } } = this.payForm;
    if (this.payForm.invalid) {
      console.log('error')
      return
    }
    const paymentData: TransactionPayload = {
      card_number: selectedCard.card_number,
      cvv: selectedCard.cvv,
      expiry_date:selectedCard.expiry_date,
      destination_user_id: this.id,
      value: payValue
    }
    this.paymentService.postPayment(paymentData).pipe(
        map(data => data.status)
      ).subscribe((status) => {
      this.isApproved = status === PaymentResponseStatus.approved
      this.modalService.show(this.confirmPaymentModalTemplate)
    })
  }
}
