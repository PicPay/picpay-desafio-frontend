import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-user-dialog',
  templateUrl: './payment-user-dialog.component.html',
  styleUrls: ['./payment-user-dialog.component.scss']
})
export class PaymentUserDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PaymentUserDialogComponent>,
  ) { }

  ngOnInit() {
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
