import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { IApi } from '../../interfaces/api.interface'
import { IUser } from 'src/app/interfaces/user.interface';
import { ITransacao } from 'src/app/interfaces/transacao.interface';
import { ITransactionPayload } from 'src/app/interfaces/transactionPayload.interface';


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

  postTransacao(transactionPayload:ITransactionPayload) {
    return this.http.post<ITransacao>(`${environment.apiUrl}${environment.apiV3}/533cd5d7-63d3-4488-bf8d-4bb8c751c989`,transactionPayload).pipe(
      retry(3),
      catchError(this.genericHandleError)
    )
  }

  private genericHandleError(error: HttpErrorResponse) {
    return throwError(
      'Something bad happened; please try again later.');
  }

}
