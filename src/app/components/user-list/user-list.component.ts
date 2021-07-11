import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user-list/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Output() emitUserEvent = new EventEmitter<IUser>();

  labelBtnPay: string = 'Pagar';
  users: IUser[];

  constructor(private service: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  selectUser(userSelected: IUser) {
    this.emitUserEvent.emit(userSelected);
  }

  getUsers() {
    this.service.get().subscribe(data => {
      this.users = data;
    });
  }

}
