import { Component, OnInit, Input } from '@angular/core';

import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user.service';
import { Transaction } from 'src/app/services/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() users: User[] = [];
  @Input() transactions: Transaction[] = [];

  showDialog = false;

  constructor(
    private userService: UserService,
    private transactionService: TransactionService) { }

  ngOnInit() {
    this.userService
      .listUser()
      .subscribe(users => this.users = users);

    this.transactionService
    .listUser()
    .subscribe(transactions => this.transactions = transactions);

  }

  openTransaction() {
    this.showDialog = !this.showDialog
    
    // como saber qual foi clicado?
  }
}
