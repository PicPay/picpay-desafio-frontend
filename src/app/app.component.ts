import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  user: IUser;

  constructor() { }

  ngOnInit() { 
  }

  userSelected(emittedUser: IUser) {
    this.setUser(emittedUser);
  }

  setUser(user: IUser) {
    this.user = user
  }

}