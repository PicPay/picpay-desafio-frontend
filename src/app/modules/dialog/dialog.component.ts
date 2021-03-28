import { DialogService } from './dialog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  modalVisible: boolean;
  paymentModalVisibility: boolean;
  msgModalVisibility: boolean;

  constructor( private modalService: DialogService ) { }

  ngOnInit() {
    this.modalService.currentModalVisibility.subscribe(bool => this.modalVisible = bool);
    this.modalService.currentpaymentVisibility.subscribe(bool => this.paymentModalVisibility = bool);
    this.modalService.currentMsgVisibility.subscribe(bool => this.msgModalVisibility = bool);
  }

}
