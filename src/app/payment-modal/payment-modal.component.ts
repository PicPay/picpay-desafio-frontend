import { ModalSuccessComponent } from './../modal-success/modal-success.component';
import { PaymentService } from './../services/payment.service';
import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit {
  user: any = {};
  modalRef: BsModalRef;
  form: FormGroup;
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
  submitted: boolean;

  constructor(
    private bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private PaymentService: PaymentService
  ) { }

  ngOnInit() {
    console.log(this.user);
    this.formConstr()
  }

  sendPayment() {
    console.log('foi')
  }

  formConstr() {
    this.form = new FormGroup({
      card: new FormControl('', Validators.required),
      value: new FormControl('', Validators.required),
      id: new FormControl(this.user.id),
    });

  }

  get f() { return this.form.controls; }

  pay(form) {
    this.submitted = true;
      if (this.form.valid) {
      this.PaymentService.pay(form).subscribe(
        (data) => {

        });
        this.bsModalRef.hide();
        this.modalSuccess();
}
  }

  modalSuccess() {
    this.bsModalRef = this.modalService.show(ModalSuccessComponent);
  }
}
