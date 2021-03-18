import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersPaymentService } from 'src/app/services/users-payment-service/users-payment.service';

@Component({
  selector: 'app-users-payment',
  templateUrl: './users-payment.component.html',
  styleUrls: ['./users-payment.component.scss']
})
export class UsersPaymentComponent implements OnInit {
  users: User[];

  constructor ( private usersPaymentService: UsersPaymentService ) { }

  ngOnInit() { 

    this.usersPaymentService
      .getUsers()
      .subscribe({
        next: users => this.users = users,
        error: err => console.error(err)
      });

  }

}
