import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { User } from 'src/app/models/user';

import { UsersService } from 'src/app/services/users-service/users.service';
import { TransactionService } from '../../services/transaction-service/transaction.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {
  isComponentActive: boolean;
  users: User[];

  constructor ( 
    private usersService: UsersService,
    private transactionService: TransactionService ) {
      this.isComponentActive = true;
    }

  ngOnInit() { 

    this.usersService
      .getUsers()
      .pipe(
        takeWhile( () => this.isComponentActive )
      )
      .subscribe({
        next: users => this.users = users,
        error: err => console.error(err)
      });

  }

  initTransaction(user: User) {
    this.transactionService.initTransaction(user);
  }

  ngOnDestroy() {
    this.isComponentActive = false;
  }
}
