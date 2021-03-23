import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile, tap } from 'rxjs/operators';
import {trigger, style, animate, transition} from '@angular/animations';

import { User } from 'src/app/models/user';

import { UsersService } from 'src/app/services/users-service/users.service';
import { TransactionService } from '../../services/transaction-service/transaction.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  animations: [
    trigger('FadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('1s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
})
export class UsersListComponent implements OnInit, OnDestroy {
  isComponentActive: boolean;

  screenWidth = window.innerWidth;

  isLoaded: boolean;
  users: User[];

  constructor ( 
    private usersService: UsersService,
    private transactionService: TransactionService ) {
      this.isComponentActive = true;
      this.isLoaded = false;
    }

  ngOnInit() { 

    this.usersService
      .getUsers()
      .pipe(
        tap( ()=> this.isLoaded = true ),
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
