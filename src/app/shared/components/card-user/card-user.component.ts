import { Component, Input } from '@angular/core';
import { User } from '@shared/interfaces/user';

@Component({
  selector: 'ngx-card-user',
  templateUrl: 'card-user.component.html',
  styleUrls: ['card-user.component.scss'],
})
export class CardUserComponent {
  @Input() user: User;
}
