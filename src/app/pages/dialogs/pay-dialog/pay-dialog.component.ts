import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { User } from "src/app/data-access/users/interfaces/users.interface";

@Component({
  selector: "app-pay-dialog",
  templateUrl: "./pay-dialog.component.html",
  styleUrls: ["./pay-dialog.component.scss"],
})
export class PayDialogComponent implements OnInit {
  // public transaction:boolean = false;

  constructor(
    // public payDialogRef: MatDialogRef<PayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedUser: Partial<User>
  ) {}

  ngOnInit(): void {
    console.log(this.selectedUser);
  }
}
