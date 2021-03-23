import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-payment',
  templateUrl: './return-payment.component.html',
  styleUrls: ['./return-payment.component.scss']
})
export class ReturnPaymentComponent implements OnInit {

  payloadTrue: string = "Pagamnento efetuado com sucesso!"
  payloadFalse: string = "Pagamento NÃO efetuado."

  constructor(public dialogRef: MatDialogRef<ReturnPaymentComponent>) { }

  ngOnInit() {
  }

  closed(): void {
    this.dialogRef.close();
  }

}
