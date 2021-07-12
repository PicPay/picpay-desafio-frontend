import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NgxSpinnerService } from 'ngx-spinner';

import { User } from 'src/app/models/user.model';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<Array<User>>;
  users: User[];

  constructor(private spinnerService: NgxSpinnerService, private service: UserService) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.service.users.subscribe((user) => {
      this.users = user;
      this.spinnerService.hide();
    });
  }
}
