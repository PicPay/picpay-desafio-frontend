import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  modalVisible: boolean;
  transactionInfo;

  constructor( private service: UsersService ) { }

  ngOnInit() {
    this.service.currentModalVisibility
      .subscribe(bool => this.modalVisible = bool);
    this.service.currentTransactionInfo
      .subscribe(obj => this.transactionInfo = obj);
  }

}
