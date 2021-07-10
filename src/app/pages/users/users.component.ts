import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from 'src/app/models/user.model';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<Array<User>>;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.users$ = this.service.users;
  }
}
