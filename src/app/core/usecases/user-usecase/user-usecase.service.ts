import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRepositoryService } from 'src/app/data/user-repository/user-repository.service';
import { User } from '../../entities/user.model';
import { UserInterface } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserUsecaseService implements UserInterface {

  constructor(private userRepositoryService: UserRepositoryService) { }

  getAll(): Observable<User[]> {
    return this.userRepositoryService.getAll();
  }
}
