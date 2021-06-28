import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipt-modal',
  templateUrl: './recipt-modal.component.html',
  styleUrls: ['./recipt-modal.component.scss']
})
export class ReciptModalComponent implements OnInit {

  @Input() transactionInfo: TransactionInfo;
  @Output() closeModal = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitClose() {
    this.closeModal.emit(
      {
        recipt: false
      }
    );
  }

}
