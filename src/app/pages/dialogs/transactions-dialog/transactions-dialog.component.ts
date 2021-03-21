import { Component, Inject, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Card } from "src/app/data-access/transactions/interfaces/card.interface";
import { TransactionsDialogData } from "src/app/data-access/transactions/interfaces/transactions-dialog-data.interface";
import { TransactionPayload } from "src/app/data-access/transactions/interfaces/transactions-payload.interface";

@Component({
  selector: "app-transactions-dialog",
  templateUrl: "./transactions-dialog.component.html",
  styleUrls: ["./transactions-dialog.component.scss"],
})
export class TransactionsDialogComponent {
  public transactionForm: FormGroup;

  constructor(
    private transactionsDialogRef: MatDialogRef<TransactionsDialogComponent>,
    private formBuilder: FormBuilder,

    @Inject(MAT_DIALOG_DATA)
    public transactionsDialogData: TransactionsDialogData
  ) {
    this.transactionForm = this.formBuilder.group({
      amount: [
        "",
        Validators.compose([Validators.required, Validators.min(0.01)]),
      ],
      cards: ["", Validators.required],
    });
  }

  private createTransactionPayload(): TransactionPayload {
    const card_number: string = this.transactionForm.get("cards").value;

    const card: Card = this.transactionsDialogData.cards.find(
      (element) => element.card_number === card_number
    );

    const value: number = this.transactionForm.get("amount").value;

    const transactionPayload: TransactionPayload = {
      card_number,
      cvv: card.cvv,
      expiry_date: card.expiry_date,
      destination_user_id: this.transactionsDialogData.selectedUser.id,
      value,
    };

    return transactionPayload;
  }

  public onCloseDialog(): void {
    const transactionPayload: TransactionPayload = this.createTransactionPayload();
    this.transactionsDialogRef.close(transactionPayload);
  }

  public onCancel():void{
    this.transactionsDialogRef.close(null);
  }
}
