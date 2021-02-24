import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CARDS } from 'src/app/shared/mock/card.mock';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss']
})
export class TransactionCardComponent implements OnInit {

  @Input()
  public selectedUser: User;

  public availableCards: any[] = CARDS;

  public formGroup = new FormGroup({
    value: new FormControl(0, [
      Validators.required
    ])
  });

  constructor() { }

  ngOnInit() {
  }

  getLastFourDigits(cardNumber: string): string {
    return cardNumber.trim().substr(cardNumber.length - 4);
  }

}
