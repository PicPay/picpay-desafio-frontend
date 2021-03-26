import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreditCard } from '../shared/credit-card.model';
import { CreditCardService } from '../shared/credit-card.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../shared/transaction.service';
import { TransactionPayload } from '../shared/transaction-payload.model';
import { TransactionResponse } from '../shared/transaction-response.model';
import { User } from '../shared/user.model';

@Component({
    selector: 'app-transaction-dialog',
    templateUrl: './transaction-dialog.component.html',
    styleUrls: ['./transaction-dialog.component.scss']
})
export class TransactionDialogComponent {

    cards: CreditCard[];
    transactionDetailsFormGroup: FormGroup;
    transactionPayload: TransactionPayload;
    transactionResponse: TransactionResponse;
    processingTransaction: boolean;
    processingFailed: boolean;

    constructor(public dialogRef: MatDialogRef<TransactionDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public destinationUser: User,
                private creditCardService: CreditCardService,
                private transactionService: TransactionService,
                private formBuilder: FormBuilder) {

        this.transactionDetailsFormGroup = this.formBuilder.group({
            value: [undefined, Validators.required],
            creditCard: [undefined, Validators.required]
        });
        this.transactionPayload = new TransactionPayload(this.destinationUser.id);

        creditCardService.getAllCreditCards().subscribe((cards: CreditCard[]) => {
            this.cards = cards;
        });
    }

    close(): void {
        this.dialogRef.close();
    }

    submitTransaction() {
        this.transactionDetailsFormGroup.markAllAsTouched();

        if (this.transactionDetailsFormGroup.status !== 'VALID') {
            return;
        }

        this.processingTransaction = true;
        this.transactionService.submitTransaction(this.transactionPayload).subscribe((response: TransactionResponse) => {
            this.processingTransaction = false;
            this.transactionResponse = response;
        }, error => {
            this.processingTransaction = false;
            this.processingFailed = true;
        });
    }
}
