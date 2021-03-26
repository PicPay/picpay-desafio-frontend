import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreditCard } from '../shared/credit-card.model';
import { CreditCardService } from '../shared/credit-card.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../shared/transaction.service';
import { PaymentInfo } from '../shared/payment-info.model';
import { TransactionResponse } from '../shared/transaction-response.model';
import { User } from '../shared/user.model';

@Component({
    selector: 'app-payment-dialog',
    templateUrl: './payment-dialog.component.html',
    styleUrls: ['./payment-dialog.component.scss']
})
export class PaymentDialogComponent {
    cards: CreditCard[];
    paymentInfoFormGroup: FormGroup;
    paymentInfo: PaymentInfo;
    transactionResponse: TransactionResponse;
    processingTransaction: boolean;
    processingFailed: boolean;

    constructor(public dialogRef: MatDialogRef<PaymentDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public destinationUser: User,
                private creditCardService: CreditCardService,
                private transactionService: TransactionService,
                private formBuilder: FormBuilder) {

        this.paymentInfoFormGroup = this.formBuilder.group({
            value: [undefined, Validators.required],
            creditCard: [undefined, Validators.required]
        });
        this.paymentInfo = new PaymentInfo(this.destinationUser.id);

        creditCardService.getAllCreditCards().subscribe((cards: CreditCard[]) => {
            this.cards = cards;
        });
    }

    close(): void {
        this.dialogRef.close();
    }

    submitPayment() {
        this.paymentInfoFormGroup.markAllAsTouched();

        if (this.paymentInfoFormGroup.status !== 'VALID') {
            return;
        }

        this.processingTransaction = true;
        this.transactionService.sendPayment(this.paymentInfo).subscribe((response: TransactionResponse) => {
            this.processingTransaction = false;
            this.transactionResponse = response;
        }, error => {
            this.processingTransaction = false;
            this.processingFailed = true;
        });
    }
}
