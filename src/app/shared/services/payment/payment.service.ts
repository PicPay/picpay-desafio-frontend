import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { Observable, of } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import {
  PaymentDialogComponent,
  PaymentDialogData,
  PaymentDialogRef,
} from '../../components/payment-dialog/payment-dialog.component';
import {
  PaymentResultDialogComponent,
  PaymentResultDialogData,
} from '../../components/payment-result-dialog/payment-result-dialog.component';
import { CreditCard } from '../../models/credit-card.model';
import { TransactionPayload } from '../../models/transaction-payload.model';
import { TransactionResponse } from '../../models/transaction-response.model';
import { User } from '../../models/user.model';
import { TransactionService } from '../transaction/transaction.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(
    private dialogService: MatDialog,
    private transactionService: TransactionService
  ) {}

  /**
   * Start the payment process
   * @param receiver The user that will receive the payment
   */
  public startPayment(receiver: User) {
    this.transactionService
      .getCards()
      .pipe(
        switchMap((cards: CreditCard[]) => {
          const paymentDialogConfig: MatDialogConfig<PaymentDialogData> = {
            panelClass: 'payment-dialog',
            width: '90%',
            maxWidth: '400px',
            data: { receiver, cards },
          };

          return this.dialogService
            .open(PaymentDialogComponent, paymentDialogConfig)
            .afterClosed();
        }),
        filter((payload) => payload !== undefined),
        switchMap((payload: TransactionPayload) =>
          this.transactionService.doTransaction(payload)
        )
      )
      .subscribe((response: TransactionResponse) => {
        const paymentDialogConfig: MatDialogConfig<PaymentResultDialogData> = {
          panelClass: 'payment-dialog',
          width: '90%',
          maxWidth: '300px',
          data: { success: response.success },
        };

        this.dialogService.open(
          PaymentResultDialogComponent,
          paymentDialogConfig
        );
      });
  }
}
