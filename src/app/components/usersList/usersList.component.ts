import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../models/user.model';
import { usersMock } from '../../../__mocks__/usersMock';

@Component({
  selector: 'app-user-list',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.scss']
})

export class UsersListComponent implements OnInit {
  users: User[];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers(): void {
    this.api.getUsers()
      .subscribe(data => {
        data.length > 0
          ? this.users = data
          : this.getUsersMock();
      });
  }

  private getUsersMock(): void {
    this.users = usersMock;
  }
}

