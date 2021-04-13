import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-response-payment',
  templateUrl: './modal-response-payment.component.html',
  styleUrls: ['./modal-response-payment.component.scss']
})
export class ModalResponsePaymentComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit() {
  }

}
