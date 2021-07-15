import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CardPaymentService {

  constructor(private http: HttpClient) { }

  userList(){
    return this.http.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce');
  }

  payment(card){
    return this.http.post('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', card)
  }

}
