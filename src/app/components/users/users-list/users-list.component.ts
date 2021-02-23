import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/app/shared/mock/user.mock';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor() { }

  public users: User[] = USERS;

  ngOnInit() {
  }

}
