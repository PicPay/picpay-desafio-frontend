import { PaymentModalComponent } from './payment-modal/payment-modal.component';
import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  sendPay(){
    const initialState = {
      size: "dialog-centered",
      list: [
        'Open a modal with component',
        'Pass your data',
        
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(PaymentModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }


}
