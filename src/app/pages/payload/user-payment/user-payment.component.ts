import { FormGroup } from '@angular/forms';
import { TransactionPayload } from '../../../interfaces/payload.model';
import { PayloadService } from '../../../services/payload.service'
import { ReturnPaymentComponent } from '../return-payment/return-payment.component';
import { Card } from '../../../interfaces/card.model';
import { CardService } from '../../../services/card.service';

import { User } from '../../../interfaces/user.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.scss']
})
export class UserPaymentComponent implements OnInit {

  payload: TransactionPayload = {
    // Card Info
    card_number: '',
    cvv: null,
    expiry_date: '',

    // Destination User ID
    destination_user_id: null,

    // Value of the Transaction
    value: null
  }

  cards: Card[]

  formulario: FormGroup

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UserPaymentComponent>,
    private cardService: CardService,
    private payloadService: PayloadService,
    @Inject(MAT_DIALOG_DATA) public data: User,

  ) { }

  ngOnInit() {
    this.cardService.readCard().subscribe(cards => {
      this.cards = cards
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  newPayment(): void {
    this.payloadService.transactionResponse(this.payload).subscribe(() => {
        this.dialogRef.close();
        const dialogRef = this.dialog.open(ReturnPaymentComponent, {
          width: '250px',
        })
    })
  }


  returnPayload(): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(ReturnPaymentComponent, {
      width: '250px',
    }
    );

  }

}
