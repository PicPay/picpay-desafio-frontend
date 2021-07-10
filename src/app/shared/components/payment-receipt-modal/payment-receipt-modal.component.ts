import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-payment-receipt-modal',
  templateUrl: './payment-receipt-modal.component.html',
  styleUrls: ['./payment-receipt-modal.component.scss'],
  host: {
    '[class.open]': 'isOpen'
  }
})
export class PaymentReceiptModalComponent {
  @Input() result: any;
  @Input() isOpen: boolean;
  @Output() close = new EventEmitter();

  constructor() { }

  closeModal() {
    this.close.emit();
  }
}
