import { User } from './../user.model';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-user-dialog',
  templateUrl: './payment-user-dialog.component.html',
  styleUrls: ['./payment-user-dialog.component.scss']
})

export class PaymentUserDialogComponent implements OnInit {

  @Input user: User

  public payForm: FormGroup

  constructor(
 
    public dialogRef: MatDialogRef<PaymentUserDialogComponent>,

  ) { }

  ngOnInit() {
   
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
