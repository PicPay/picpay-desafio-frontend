import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private modalVisibility = new BehaviorSubject<boolean>(false);
  currentModalVisibility = this.modalVisibility.asObservable();

  private paymentModalVisibility = new BehaviorSubject<boolean>(false);
  currentpaymentVisibility = this.paymentModalVisibility.asObservable();

  private msgModalVisibility = new BehaviorSubject<boolean>(false);
  currentMsgVisibility = this.msgModalVisibility.asObservable();

  constructor() { }

  changeModalVisibility(bool: boolean) {
    this.modalVisibility.next(bool);
  }

  changePaymentVisibility(bool: boolean) {
    this.paymentModalVisibility.next(bool);
  }

  changeMsgVisibility(bool: boolean) {
    this.msgModalVisibility.next(bool);
  }

}
