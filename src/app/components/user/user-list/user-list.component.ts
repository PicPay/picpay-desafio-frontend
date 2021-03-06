import { UserService } from './../user.service';
import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentUserDialogComponent } from './../payment-user-dialog/payment-user-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[]

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.userService.read().subscribe(users => {
      this.users = users
    })
  }

  pay(): void {
    const dialogRef = this.dialog.open(PaymentUserDialogComponent, {
      width: '420px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
