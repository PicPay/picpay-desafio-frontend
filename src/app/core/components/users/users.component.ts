import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';
import { User } from 'src/app/shared/models/user.model';
import { ModalPaymentComponent } from '../modals/modal-payment/modal-payment.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private usersService: UsersService, public dialog: MatDialog) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users
    })
  }

  payUser(user: User): void {
    this.dialog.open(ModalPaymentComponent, {
      data: {user: user}
    });
  }
}
