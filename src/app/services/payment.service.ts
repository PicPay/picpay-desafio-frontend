import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PaymentModel } from '../models/payment-model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  pay$(payment: PaymentModel): Observable<{success: boolean, status: string}> { 
    return of(null);
  }
}
