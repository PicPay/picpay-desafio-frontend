import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user = {} as User;

  constructor(  private UserService: UserService) { }

  ngOnInit() {
   this.getUsers() 
  }

  getUsers() {
    this.UserService.getUser().subscribe((user: User) => {
      this.user = user;
     });
  }
}
