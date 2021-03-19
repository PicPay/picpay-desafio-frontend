import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { TransactionApprovalPayload } from "src/app/data-access/transactions/interfaces/transactions-approval-payload.interface";

@Component({
  selector: "app-transactions-confirmation-dialog",
  templateUrl: "./transactions-confirmation-dialog.component.html",
  styleUrls: ["./transactions-confirmation-dialog.component.scss"],
})
export class TransactionsConfirmationDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public transaction: TransactionApprovalPayload[]
  ) {}

  ngOnInit(): void {
    console.log(this.transaction);
  }
}
