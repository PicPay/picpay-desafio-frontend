import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: UserModel[];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUsers$().subscribe(
      result => {
        this.users = result;
      }
    );
  }

}
