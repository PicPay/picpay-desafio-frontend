import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Response {
  success: boolean;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(
      'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'
    );
  }

  public createTransaction(
    transaction: TransactionPayload
  ): Observable<Response> {
    return this.http.post<Response>(
      'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989',
      transaction
    );
  }
}
