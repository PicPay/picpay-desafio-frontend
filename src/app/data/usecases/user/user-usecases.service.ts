import { Injectable } from '@angular/core';
import { UserUsecases } from './user-usecases.interface';
import { UserRepositoryService } from '../../repositories/user/user-repository.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserUsecasesService implements UserUsecases {

  constructor(private userRepository: UserRepositoryService) { }

  getAllUsers<T>(): Observable<T> {
    return this.userRepository.getAll<T>().pipe(delay(2000));
  }

}
