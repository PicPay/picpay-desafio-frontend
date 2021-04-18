import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@picpay-lib/ngx-domain';

@Component({
  selector: 'ngx-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user!: User;
  @Output() payToUser = new EventEmitter<User>();

  constructor() {}

  pay(): void {
    this.payToUser.emit(this.user);
  }
}
