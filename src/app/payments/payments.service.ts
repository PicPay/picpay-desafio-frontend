import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import Contact from './interfaces/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  private apiUrl: string = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce"

  constructor(private httpClient: HttpClient) {}

  public getAllContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.apiUrl);
  }
}
