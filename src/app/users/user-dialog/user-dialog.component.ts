import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  modalVisible: boolean;
  paymentModalVisibility: boolean;
  msgModalVisibility: boolean

  constructor( private service: UsersService ) { }

  ngOnInit() {
    this.service.currentModalVisibility.subscribe(bool => this.modalVisible = bool);
    this.service.currentpaymentVisibility.subscribe(bool => this.paymentModalVisibility = bool);
    this.service.currentMsgVisibility.subscribe(bool => this.msgModalVisibility = bool);

  }

}
