import { TransactionInfo, TransactionPayload, TransactionReturn } from './../data/types';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../data/types';
import { BehaviorSubject } from 'rxjs';
import cards from '../data/cards.js';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  cards = cards;

  private readonly API_USERS = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';
  private readonly API_POST = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';

  private modalVisibility = new BehaviorSubject<boolean>(false);
  currentModalVisibility = this.modalVisibility.asObservable();

  private paymentModalVisibility = new BehaviorSubject<boolean>(false);
  currentpaymentVisibility = this.paymentModalVisibility.asObservable();

  private msgModalVisibility = new BehaviorSubject<boolean>(false);
  currentMsgVisibility = this.msgModalVisibility.asObservable();

  private destinationUser = new BehaviorSubject<User>(null);
  currentDestinationUSer = this.destinationUser.asObservable();

  private transactionInfo = new BehaviorSubject<TransactionInfo>(null);
  currentTransactionInfo = this.transactionInfo.asObservable();

  constructor( private http: HttpClient ) { }

  listContacts() {
    return this.http.get<User[]>(this.API_USERS);
  }

  transactionPost(transactionPayload) {
    this.http.post(this.API_POST, transactionPayload)
      .subscribe((data: TransactionReturn) => {
        if (transactionPayload.card_number === this.cards.cards[0].card_number) {
          const transInfo: TransactionInfo = {
            status: data.success,
            value: transactionPayload.value
          };
          this.transactionInfo.next(transInfo);
        } else {
          const transInfo: TransactionInfo = {
            status: false,
            value: null
          };
          this.transactionInfo.next(transInfo);
        }
        this.changeMsgVisibility(true);
      });
  }

  changeModalVisibility(bool: boolean) {
    this.modalVisibility.next(bool);
  }

  changePaymentVisibility(bool: boolean) {
    this.paymentModalVisibility.next(bool);
  }

  changeMsgVisibility(bool: boolean) {
    this.msgModalVisibility.next(bool);
  }

  changeDestinationUser(user: User) {
    this.destinationUser.next(user);
  }
}

