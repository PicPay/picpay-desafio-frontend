import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users/users.service"
import { User } from "../../models/user.model"

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  public users: User[];
  constructor(private usersService: UsersService) { }
  ngOnInit() {
    this.usersService.getAllUsers().subscribe((response) => {
      console.log(response);
      this.users = response;
    
    });
  }

}
