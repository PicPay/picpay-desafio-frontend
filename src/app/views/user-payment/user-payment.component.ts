import { User } from './../../components/user/user.model';
import { UserService } from './../../components/user/user.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.scss']
})

export class UserPaymentComponent implements OnInit {

  users: User[]

  constructor( public dialogRef: MatDialogRef<UserPaymentComponent>,
    private userService: UserService,) { }

  ngOnInit() {
    this.userService.read().subscribe(users => {
      this.users = users
    })
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
