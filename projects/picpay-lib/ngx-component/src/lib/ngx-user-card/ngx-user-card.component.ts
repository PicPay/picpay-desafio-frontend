import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IPaymentTransactionResult, User } from '@picpay-lib/ngx-domain';
import { NgxPaymentResultComponent, NgxPayToUserComponent } from '../dialog';

@Component({
  selector: 'ngx-user-card',
  templateUrl: './ngx-user-card.component.html',
  styleUrls: ['./ngx-user-card.component.scss'],
})
export class NgxUserCardComponent {
  @Input() user!: User;

  constructor(private dialog: MatDialog) {}

  pay(): void {
    const dialogRef = this.openPayToUserDialog();

    dialogRef.afterClosed().subscribe((result: IPaymentTransactionResult | undefined) => {
      if (result) {
        this.openPaymentFeedback(result);
      }
    });
  }

  openPayToUserDialog(): MatDialogRef<NgxPayToUserComponent> {
    return this.dialog.open(NgxPayToUserComponent, {
      id: 'pay-to-user',
      data: this.user,
    });
  }

  private openPaymentFeedback(paymentTransactionResult: IPaymentTransactionResult): void {
    this.dialog.open(NgxPaymentResultComponent, {
      id: 'payment-result',
      data: paymentTransactionResult,
    });
  }
}
