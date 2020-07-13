import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService
      .listUser()
      .subscribe(users => this.users = users);


    // this.userService
    //   .listUser()
    //   .subscribe(users => {
    //     console.log(users);
    //     this.users = users,

    //     err => console.log(err)
    //   })

    // http
    //   .get<User[]>('https://api.github.com/users')
    //   .subscribe(users => {
    //     console.log(users);
    //     this.users = users,

    //     err => console.log(err)
    //   })
  }
}
