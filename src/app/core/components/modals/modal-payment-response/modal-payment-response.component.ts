import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-payment-response',
  templateUrl: './modal-payment-response.component.html',
  styleUrls: ['./modal-payment-response.component.scss'],
})
export class ModalPaymentResponseComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {}
}
