import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../../../transaction';
import { TransactionService } from '../../../transaction.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  @Input() transactions: Transaction[] = [];

  cards = [
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

  constructor(private transactionService: TransactionService) { }

  ngOnInit() { 
    this.transactionService
      .listUser()
      .subscribe(transactions => this.transactions = transactions);
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
