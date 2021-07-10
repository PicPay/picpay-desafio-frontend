import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/entities/user.model';
import { UserInterface } from 'src/app/core/interfaces/user.interface';
import { UserUsecaseService } from 'src/app/core/usecases/user-usecase/user-usecase.service';

@Injectable({
  providedIn: 'root'
})
export class UserControllerService implements UserInterface {

  constructor(private userUsecaseService: UserUsecaseService) { }

  getAll(): Observable<User[]> {
    return this.userUsecaseService.getAll();
  }
}
