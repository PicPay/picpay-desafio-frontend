import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit {
  
  valor: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
