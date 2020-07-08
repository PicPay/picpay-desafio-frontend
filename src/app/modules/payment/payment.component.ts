import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { map } from 'rxjs/operators';
import { PaymentService } from 'src/app/core/http';
import { PaymentResponseStatus, TransactionPayload } from 'src/app/core/models';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['../styles/modal.scss']
})
export class PaymentComponent {

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
    private formBuilder: FormBuilder) { }


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
