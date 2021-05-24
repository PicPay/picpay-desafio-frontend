import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { 
  faCheckCircle, 
  faClock, 
  faCalendarAlt, 
  faArrowLeft, 
  faMoneyBill, 
  faCreditCard, 
  faTimesCircle
 } from '@fortawesome/free-solid-svg-icons'

import { TransactionPayload } from '../modal-payment/interfaces/transaction.interface';
import { formartCurrency, formatDate, formatHour } from '../../../helpers/helpers'

@Component({
  selector: 'modal-payment-result-transaction',
  templateUrl: './modal-payment-result-transaction.component.html',
  styleUrls: ['./modal-payment-result-transaction.component.scss']
})
export class ModalPaymentResultTransactionComponent implements OnInit {
  @Input() openModal: boolean = false;
  @Input() paymentData: TransactionPayload;

  @Output() closeModal = new EventEmitter<{ open: boolean }>();

  formartCurrency = formartCurrency;
  formatDate = formatDate;
  formatHour = formatHour;

  faCheckCircle = faCheckCircle;
  faClock = faClock;
  faCalendar = faCalendarAlt;
  faArrowLeft = faArrowLeft;
  faMoneyCheck = faMoneyBill;
  faCreditCard = faCreditCard;
  faTimesCircle = faTimesCircle

  constructor() { }

  ngOnInit() {
  }

  handleCloseModal(): void {
    this.closeModal.emit({ open: false })
  }

}
