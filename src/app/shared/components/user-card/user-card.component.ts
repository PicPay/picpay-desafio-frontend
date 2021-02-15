import { USER_CARD_VOCABULARY } from './user-card.component.vocabulary';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@core/domains/user/user.domain';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  vocabulary = USER_CARD_VOCABULARY;

  @Input() user: User;

  @Input() isPaid: boolean;

  @Output() pay: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onClickPay(user: User) {
    this.pay.emit(user);
  }
}
