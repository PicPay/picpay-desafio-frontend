import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalPaymentComponent } from '../modal-payment/modal-payment.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  constructor(
    public dialog: MatDialog,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      response =>
        this.users = response
    );
  }

  openPaymentModal(user: User): void {
    const dialogRef = this.dialog.open(ModalPaymentComponent, {
      width: '500px',
      data: user
    });
  }

}
