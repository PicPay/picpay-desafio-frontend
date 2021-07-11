import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponseModal } from 'src/app/interfaces/response-modal.interface';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {

  url = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';

  constructor(private http: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  post(data) {
    return this.http.post<IResponseModal>(this.url, data, this.httpOptions);
  }
  
}
