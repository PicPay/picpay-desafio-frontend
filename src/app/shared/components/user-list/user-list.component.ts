import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserAccount } from '../../model/user-account.model';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input() users: UserAccount[] = [];
  @Output() userSelected = new EventEmitter<UserAccount>()


  constructor() { }

  onUserSelected(user: UserAccount) {
    this.userSelected.emit(user)
  }
}
