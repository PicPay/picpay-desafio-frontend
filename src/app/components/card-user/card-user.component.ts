import { Component, Input, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})

export class CardUserComponent implements OnInit {
  @Input() user: User;
  @Output() onPaymentUser = new EventEmitter<User>();

  constructor() { }

  ngOnInit() { }

  paymentUser(user: User){
    this.onPaymentUser.emit(user);
  }
}
