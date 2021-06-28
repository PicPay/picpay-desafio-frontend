import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipt-modal',
  templateUrl: './recipt-modal.component.html',
  styleUrls: ['./recipt-modal.component.scss']
})
export class ReciptModalComponent implements OnInit {

  @Input() transactionInfo;
  @Output() close = new EventEmitter;

  constructor() { }

  ngOnInit() {
    console.log(this.transactionInfo);
  }

  emitClose(){
    this.close.emit(
      {
        'recipt': false
      }
    )
  }

}
