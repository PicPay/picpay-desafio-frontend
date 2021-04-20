import { Injectable } from '@angular/core';
import { CreditCard, invalidCreditCardMock, validCreditCardMock } from '@picpay-lib/ngx-domain';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  constructor() {}

  getList(): Observable<CreditCard[]> {
    return of([new CreditCard(invalidCreditCardMock), new CreditCard(validCreditCardMock)]);
  }
}
