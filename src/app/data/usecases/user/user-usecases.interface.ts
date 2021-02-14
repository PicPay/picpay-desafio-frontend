import { Observable } from 'rxjs';

export abstract class UserUsecases {
  abstract getAllUsers<T>(): Observable<T[]>;
}
