import { UserService } from './../user.service';
import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[]

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.read().subscribe(users => {
      this.users = users
    })
  }

}
