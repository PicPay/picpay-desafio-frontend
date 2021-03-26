import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { User } from '@shared/interfaces/user';
import { PicPayService } from '@shared/services/picpay.service';

@Injectable({
  providedIn: 'root',
})
export class PicPayStore {
  private users = new BehaviorSubject<User[]>(null);
  readonly users$ = this.users.asObservable();

  constructor(private picPayService: PicPayService) {}

  loadUsers(): Observable<User[]> {
    const hasUsers = this.users.getValue();

    if (hasUsers) {
      return of(hasUsers);
    }

    return this.picPayService.users().pipe(tap((users: User[]) => this.users.next(users)));
  }

  loadUser(userId: number): Observable<User> {
    const users = this.users.getValue();

    if (users) {
      return of(
        users.find((user: User) => {
          return user.id === userId;
        })
      );
    }

    return this.loadUsers().pipe(
      switchMap(() => {
        return this.loadUser(userId);
      })
    );
  }
}
