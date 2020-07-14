import { Component, OnInit, Input } from '@angular/core';

import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() users: User[] = [];

  constructor(
    private userService: UserService) { }

  ngOnInit() {
    this.userService
      .listUser()
      .subscribe(users => this.users = users);
  }
}
