import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/shared/models/user.model';
import { ModalPaymentComponent } from '../modal-payment/modal-payment.component';
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

  pay(user: User): void {
    this.dialog.open(ModalPaymentComponent, {
      data: {user: user}
    });
  }
}
