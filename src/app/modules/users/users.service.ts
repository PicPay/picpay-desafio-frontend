import { Injectable } from '@angular/core';
import { User } from '../../core/types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private destinationUser = new BehaviorSubject<User>(null);
  currentDestinationUser = this.destinationUser.asObservable();

  constructor( ) { }

  changeDestinationUser(user: User) {
    this.destinationUser.next(user);
  }

}
