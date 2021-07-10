import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[];

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getListOfUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }
}
