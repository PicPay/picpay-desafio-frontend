import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PaymentModalComponent } from '../payment-modal/payment-modal.component';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {

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
