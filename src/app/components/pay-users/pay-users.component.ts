import { Component, OnInit } from '@angular/core';
import { PayUser } from './pay-user/pay-user.model';
import { PayUserService } from '../../services/pay-users.service';

@Component({
  selector: 'app-pay-users',
  templateUrl: './pay-users.component.html',
  styleUrls: ['./pay-users.component.scss']
})
export class PayUsersComponent implements OnInit {

  constructor(private payUserService: PayUserService) { }

  payUsers: PayUser[];

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.payUserService.getUsers()
      .subscribe(users => {
        this.payUsers = users
      })
  }
}
