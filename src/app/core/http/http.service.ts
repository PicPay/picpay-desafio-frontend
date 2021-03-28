import { DialogService } from './../../modules/dialog/dialog.service';
import { BehaviorSubject } from 'rxjs';
import { TransactionReturn, TransactionInfo, User } from '../types';
import { HttpClient } from '@angular/common/http';
import { Card } from './../types';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly API_USERS = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';
  private readonly API_POST = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';

  private transactionInfo = new BehaviorSubject<TransactionInfo>(null);
  currentTransactionInfo = this.transactionInfo.asObservable();

    private mockedCards: Card[] = [
      // valid card
      {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
      },
      // invalid card
      {
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
      },
    ];

  constructor(
    private http: HttpClient,
    private modalService: DialogService
    ) { }

  getCards() {
    return this.mockedCards;
  }

  listContacts() {
    return this.http.get<User[]>(this.API_USERS);
  }

  transactionPost(transactionPayload) {
    this.http.post(this.API_POST, transactionPayload)
      .subscribe((data: TransactionReturn) => {
        if (transactionPayload.card_number === this.mockedCards[0].card_number) {
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
        this.modalService.changeMsgVisibility(true);
      });
  }
}
