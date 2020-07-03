import { Injectable } from '@angular/core';
import { IUsersRepository } from 'src/app/core/interface/repositories';
import { Observable } from 'rxjs';
import { UserEntity } from 'src/app/core/entities/user-entity';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersRepositoryService implements IUsersRepository {

  constructor(
    private httpClient: HttpClient
  ) { }
  get(): Observable<UserEntity[]> {
    return this.httpClient.get<UserEntity[]>(environment.serverUrl + 'v2/5d531c4f2e0000620081ddce');
  }
}
