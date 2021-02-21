import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PaymentModalComponent } from '../payment-modal/payment-modal.component';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent implements OnInit {

  @Input() bodyMessage: string;
  @Input() title: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    private modalData: any,
    public dialogRef: MatDialogRef<PaymentModalComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }
}
