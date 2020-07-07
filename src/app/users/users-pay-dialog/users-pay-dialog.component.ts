import { Component, Input, TemplateRef } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { PaymentService } from '../service/payment.service';


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
  @Input() id: string

  modalRef: BsModalRef;
  isApproved: boolean;

  constructor(
    private modalService: BsModalService, 
    private paymentService: PaymentService) {}

  payUser(template: TemplateRef<any>, card, userId, payValue) {
    this.paymentService.postPayment({
      card_number: card.card_number,
      cvv: card.cvv,
      expiry_date: card.expiry_date,
      destination_user_id: userId,
      value: payValue.value
    }).subscribe((data: any) => {
      if (data.status === 'Aprovada') {
        this.isApproved = true
        this.modalRef = this.modalService.show(template);
      } else {
        this.isApproved = false
        this.modalRef = this.modalService.show(template);
      }
    })
  }
}
