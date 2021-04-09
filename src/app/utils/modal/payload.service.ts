import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PayloadService {

  constructor(private http: Http) { }

  setPayment(_endpoint, _data) {
    return this.http.post(_endpoint, _data)
      .map(res => (<any>res)._body !== '' ? res.json() : null);
  }
}
