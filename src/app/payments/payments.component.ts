import { Component, OnInit } from '@angular/core';
import Contact from './interfaces/contact.interface';
import { TransactionPayload } from './modal-payment/interfaces/transaction.interface';
import { PaymentsService } from './payments.service';

@Component({
  selector: 'payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  contacts: Contact[] = [];
  contactReceiving: Contact;
  openModalPayment: boolean = false;
  openModalSuccessPayment: boolean = false;
  paymentData: TransactionPayload;

  constructor(private paymentsService: PaymentsService) { }

  ngOnInit() {
    this.paymentsService.getAllContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  handleOpenModalPayment(contact: Contact): void {
    this.openModalPayment = true;
    this.contactReceiving = contact;
  }
  
  handleCloseModalPayment(event){
    this.openModalPayment = false;
  }

  handleCloseModalPaymentSuccess(event){
    this.openModalSuccessPayment = false;
  }

  handlePaymentStatus(data: TransactionPayload){
    this.handleCloseModalPayment(null);
    this.paymentData = data;
    this.openModalSuccessPayment = true;
  }

}
