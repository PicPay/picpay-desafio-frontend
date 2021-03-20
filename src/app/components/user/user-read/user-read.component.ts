import { UserPaymentComponent } from '../../../views/payload/user-payment/user-payment.component';
import { User } from './../user.model';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.scss']
})
export class UserReadComponent implements OnInit {

  users: User[]

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.userService.read().subscribe(users => {
      this.users = users
    })
  }


  payUser(user: User): void {

    const dialogRef = this.dialog.open(UserPaymentComponent, {
      width: '260px', 
      data: user

    });

  }

}
