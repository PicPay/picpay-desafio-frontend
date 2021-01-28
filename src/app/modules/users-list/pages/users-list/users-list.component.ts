import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/core/services/payment-service/payment.service';
import { UserService } from 'src/app/core/services/user-service/user.service';
import User from 'src/app/shared/models/user/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: Array<User>

  constructor(private userService: UserService, private paymentService: PaymentService) {
    this.users = new Array()
  }

  ngOnInit() {
    this.retrieveUsers()
  }

  openPaymentModal(recipient: User) {
    this.paymentService.openPaymentModal(recipient)
  }


  async retrieveUsers() {
    await this.userService.retrieveUsers()
    this.users = this.userService.data.users

  }



}
