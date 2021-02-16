import { Injectable } from '@angular/core';
import { UserUsecases } from './user-usecases.interface';
import { UserRepositoryService } from '../../repositories/user/user-repository.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

/**
 * Service to handle User operations and it's bussiness logic.
 */
@Injectable({
  providedIn: 'root'
})
export class UserUsecasesService implements UserUsecases {

  constructor(private userRepository: UserRepositoryService) { }

  /**
   * Method that handle bussiness logic and execute the HTTP request to get all users.
   */
  getAllUsers<T>(): Observable<T> {
    return this.userRepository.getAll<T>().pipe(delay(2000));
  }

}
