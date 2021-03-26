import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent implements OnInit {

  transactionInfo;

  constructor( private service: UsersService ) { }

  ngOnInit() {
    this.service.currentTransactionInfo
      .subscribe(obj => this.transactionInfo = obj);
  }

  onCloseBtn() {
    this.service.changeModalVisibility(false)
    this.service.changeTransactionInfo({
        name: null,
        value: null,
        status: true      
    })
  }

}
