import { Component, OnInit, Input } from '@angular/core';

import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-photo',
  templateUrl: './user-photo.component.html',
  styleUrls: ['./user-photo.component.scss']
})
export class UserPhotoComponent implements OnInit {
  @Input() user = '';
  @Input() users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService
      .listUser()
      .subscribe(users => this.users = users);
  }

}
