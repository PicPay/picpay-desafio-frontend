import { Component, Inject, OnInit, Output } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Transaction } from "src/app/data-access/transactions/interfaces/transaction.interface";

@Component({
  selector: "app-transactions-dialog",
  templateUrl: "./transactions-dialog.component.html",
  styleUrls: ["./transactions-dialog.component.scss"],
})
export class TransactionsDialogComponent implements OnInit {
  constructor(
    public transactionsDialogRef: MatDialogRef<TransactionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedUser: Transaction
  ) {}

  ngOnInit(): void {}
  onCloseDialog() {
    this.transactionsDialogRef.close(this.selectedUser);
  }
}
