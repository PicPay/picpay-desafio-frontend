import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user-service/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: Array<User>

  constructor(private userService: UserService) {
    this.users = new Array()
   }

  ngOnInit() {
    this.retrieveUsers()
  }


  async retrieveUsers() {
    await this.userService.retrieveUsers()
    this.users = this.userService.data.users
    console.log(this.users)
  }



}
