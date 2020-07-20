import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Transaction } from '../models/transaction';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private API_USERS = environment.API_USERS;
  private API_TRANSACTION = environment.API_TRANSACTION;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.API_USERS);
  }

  postPayment(payment: Transaction) {
    return this.http.post<Response>(this.API_TRANSACTION, payment);
  }
}
