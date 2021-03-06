import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-user-dialog',
  templateUrl: './payment-user-dialog.component.html',
  styleUrls: ['./payment-user-dialog.component.scss']
})
export class PaymentUserDialogComponent implements OnInit {

  public payForm: FormGroup
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PaymentUserDialogComponent>,
  ) { }

  ngOnInit() {
    this.payForm = this.fb.group({
      
    })
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
