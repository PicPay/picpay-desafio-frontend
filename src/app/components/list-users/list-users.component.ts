import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  public users: User[];
  public loading = true;
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.userService.listUsers().subscribe(result => {
      this.users = result as User[];
      this.loading = false;
    });
  }
}
