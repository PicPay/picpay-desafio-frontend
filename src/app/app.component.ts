import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './models/user.interface';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users: Observable<User[]>;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
