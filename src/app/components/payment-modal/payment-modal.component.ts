import { Component, Input, OnInit } from '@angular/core';
import { User } from './../../models/user';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    let modalHtml = document.getElementById('modal');
    modalHtml.click();
  }

}
