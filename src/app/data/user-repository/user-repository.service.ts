import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../core/entities/user.model';
import { UserInterface } from '../../core/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService implements UserInterface {

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.users.getAll);
  }
}
