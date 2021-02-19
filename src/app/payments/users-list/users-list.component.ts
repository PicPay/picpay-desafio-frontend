import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../services/list-user.service';
import { Users } from './users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList: Users[] = []

  constructor(private userList: UserListService) { }

  ngOnInit() {
    this.userList.listUser()
      .subscribe(user => this.usersList = user);
  }

}
