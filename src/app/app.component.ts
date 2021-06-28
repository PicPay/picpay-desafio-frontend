import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransactionComponent } from './components/transaction/transaction.component';
import { User } from './models/user/user.model';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Desafio Picpay Front-end';
  users: User[] = [];

  constructor(
    public dialog: MatDialog,
    private usersService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers()
    .subscribe(users => this.users = users);
  }

  openTransactionModal(user: User): void {
    this.dialog.open(TransactionComponent, {
      data: { user }
    });
  }

}
