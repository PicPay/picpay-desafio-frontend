import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PaymentResponse } from '../../models/result/payment-response.model'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, OnChanges {

  @Input() message: PaymentResponse;
  @Input() showMessage: boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      this.message = this.message; 
  }

  ngOnInit() {
  }
}
