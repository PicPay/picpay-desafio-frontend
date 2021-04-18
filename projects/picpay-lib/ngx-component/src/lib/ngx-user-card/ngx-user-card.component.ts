import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@picpay-lib/ngx-domain';

@Component({
  selector: 'ngx-user-card',
  templateUrl: './ngx-user-card.component.html',
  styleUrls: ['./ngx-user-card.component.scss'],
})
export class NgxUserCardComponent {
  @Input() user!: User;
  @Output() payToUser = new EventEmitter<User>();

  constructor() {}

  pay(): void {
    this.payToUser.emit(this.user);
  }
}
