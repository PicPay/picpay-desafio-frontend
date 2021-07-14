import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

import { Observable } from 'rxjs';

import { ModalService } from 'src/app/services/modal/modal.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

import { Transaction } from 'src/app/models/transaction.model';
import { TransactionPayload } from 'src/app/models/transaction-payload.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  display$: Observable<'open' | 'close'>;

  constructor(
    private service: TransactionService,
    private modalService: ModalService
    ) {}

  @Input() userName: string;
  @Output() handleTransaction = new EventEmitter();

  transaction: Transaction = {
    value: null
  };

  cards = [
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];


  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  submit(value) {
    console.log(value);
    if (value.creditCard.card_number === this.cards[1].card_number) {
      throw Error('credit card is not valid');
    }

    const payload: TransactionPayload = {
      card_number: value.creditCard.card_number,
      cvv: value.creditCard.cvv,
      expiry_date: value.creditCard.expiry_date,
      value: value.transactionValue
    };

    this.service.payUser(payload).subscribe((result) => {
      this.clear();
    },
    (error) => console.error(error));
  }

  close() {
    this.modalService.close();
    this.clear();
  }

  private clear() {
    this.transaction.value = null;
  }
}
