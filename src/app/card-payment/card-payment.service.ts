import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardPaymentService {

  constructor(private http: HttpClient) { }

  userList(){
    return this.http.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce');
  }

}
