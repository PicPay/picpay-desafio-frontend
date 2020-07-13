import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user: User;
  @Output() payClick = new EventEmitter<User>();

  clickHandler(): void {
    this.payClick.emit(this.user);
  }
}
