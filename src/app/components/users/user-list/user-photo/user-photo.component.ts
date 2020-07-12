import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';

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
