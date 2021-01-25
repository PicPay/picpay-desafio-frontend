import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TransactionStatus } from 'src/app/interfaces/transaction.interface';

@Component({
  selector: 'app-transaction-feedback-modal',
  templateUrl: './transaction-feedback-modal.component.html',
  styleUrls: ['./transaction-feedback-modal.component.scss']
})
export class TransactionFeedbackModalComponent implements OnInit {
  @Input() public transactionStatus: TransactionStatus;

  constructor(public dialogRef: MatDialogRef<TransactionFeedbackModalComponent>) { }

  ngOnInit() {
  }

}
