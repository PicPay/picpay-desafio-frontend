import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user = '';
  @Input() users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService
      .listUser()
      .subscribe(users => {
        console.log(users);
        this.users = users,

        err => console.log(err)
      })

  }

}
