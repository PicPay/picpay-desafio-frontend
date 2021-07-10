import { Observable } from 'rxjs';
import { User } from '../entities/user.model';

export abstract class UserInterface {
  abstract getAll(): Observable<User[]>;
}
