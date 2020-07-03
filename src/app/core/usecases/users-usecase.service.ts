import { Injectable } from '@angular/core';
import { IUsersUsecase, IUsersRepository } from '../interface';
import { Observable } from 'rxjs';
import { UserEntity } from '../entities/user-entity';

@Injectable({
  providedIn: 'root'
})
export class UsersUsecaseService implements IUsersUsecase {

  constructor(
    private userRepository: IUsersRepository
  ) { }

  get(): Observable<UserEntity[]> {
    return this.userRepository.get();
  }
}
