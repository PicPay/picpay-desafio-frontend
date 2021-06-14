import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-result',
  templateUrl: './modal-result.component.html',
  styleUrls: ['./modal-result.component.scss']
})
export class ModalResultComponent {
  result: TransactionResult;
  user: User;

  constructor(private bsModalRef: BsModalRef) { }

  successPayment(){
    return this.result.success;
  }

  close() {
    this.bsModalRef.hide();
  }
}
