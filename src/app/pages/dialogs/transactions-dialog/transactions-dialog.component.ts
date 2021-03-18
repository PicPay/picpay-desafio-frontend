import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { User } from "src/app/data-access/users/interfaces/users.interface";

@Component({
  selector: "app-transactions-dialog",
  templateUrl: "./transactions-dialog.component.html",
  styleUrls: ["./transactions-dialog.component.scss"],
})
export class TransactionsDialogComponent implements OnInit {
  // public transaction:boolean = false;

  constructor(
    // public payDialogRef: MatDialogRef<TransactionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedUser: Partial<User>
  ) {}

  ngOnInit(): void {
    console.log(this.selectedUser);
  }
}
