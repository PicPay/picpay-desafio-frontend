import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services';
import UserType from '../../types/user/user.type';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  public users : UserType[];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers().subscribe((users: UserType[])=>{
      this.users = users;
      console.log(users);
    })
  }

}
