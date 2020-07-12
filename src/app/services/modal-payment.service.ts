import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { TransactionPayload } from '../models/transaction-payload';

@Injectable({
  providedIn: "root",
})
export class ModalPaymentService {

  flags = new Subject<any>();
  user = new Subject<any>();
  currentUser = this.user.asObservable();
  payment = new Subject<any>();

  constructor() {}

  openModalPayment(user): Observable<any>{
    this.user.next(user);
    return this.user.asObservable();
  }

  postPayment(payload): Observable<TransactionPayload[]> {
    return this.payment.asObservable();
  }

}
