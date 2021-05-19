import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-item.service';

export interface User {
    id: number;
    name: string;
    img: string;
    username: string;
}

@Component({
    selector: 'app-user-item',
    templateUrl: './user-item.component.html',
    styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
    user = {} as User;
    users: User[];

    constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

}