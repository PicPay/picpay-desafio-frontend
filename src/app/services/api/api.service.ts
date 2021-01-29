import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { IUser, IApi } from './interfaces/api.interface'


@Injectable({
  providedIn: 'root'
})
export class ApiService extends IApi  {
  constructor(protected http: HttpClient){ super();}
  
  getUsers() {
    return this.http.get<IUser[]>(`${environment.apiUrl}${environment.apiV2}/5d531c4f2e0000620081ddce`).pipe(
      retry(3),
      catchError(this.genericHandleError)
    )
  }

  private genericHandleError(error: HttpErrorResponse) {
    return throwError(
      'Something bad happened; please try again later.');
  }

}
