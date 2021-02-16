import { Injectable } from '@angular/core';
import { RepositoryBase } from 'src/app/core/interfaces/repository-base.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Base repository to handle User operations.
 */
@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService implements Pick<RepositoryBase, 'getAll'> {

  constructor(private http: HttpClient) { }

  /**
   * Method thata executes a GET HTTP request and get all users.
   */
  getAll<T>(): Observable<T> {
    return this.http.get<T>(environment.api.user.getAll);
  }
}
