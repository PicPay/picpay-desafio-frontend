import { TransactionPayload } from './payload.model';
import { PayloadService } from './payload.service';
import { User } from './../../components/user/user.model';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.scss']
})
export class UserPaymentComponent implements OnInit {


  transactionPayload: TransactionPayload = {
    card_number: '1111111111111111'
  }

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


  constructor(
    private hhtp: HttpClient,
    private payloadService: PayloadService,
    public dialogRef: MatDialogRef<UserPaymentComponent>, @Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



}
