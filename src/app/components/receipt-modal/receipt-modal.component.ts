import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-receipt-modal',
  templateUrl: './receipt-modal.component.html',
  styleUrls: ['./receipt-modal.component.scss']
})
export class ReceiptModalComponent {

  constructor(@Inject('MODAL_DATA') public success: any) { }

}
