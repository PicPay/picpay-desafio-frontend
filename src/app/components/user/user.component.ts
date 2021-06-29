import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '@app/services/user/user.service';
import { User } from '@models/user/user.model';
import { TransactionComponent } from '../modal/transaction/transaction.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;
  users: User[];

  constructor(
    public dialog: MatDialog,
    private usersService: UserService
  ) {}


  ngOnInit() {
    this.getUsers();
  }

  openModalTransaction(user: User): void {
    this.dialog.open(TransactionComponent, {
      data: { user }
    });
  }

  getUsers(): void {
    this.usersService.getUsers()
    .subscribe((users) => this.users = users);
  }

}
