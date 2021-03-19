import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { User } from "src/app/data-access/users/interfaces/users.interface";

@Component({
  selector: "app-transactions-dialog",
  templateUrl: "./transactions-dialog.component.html",
  styleUrls: ["./transactions-dialog.component.scss"],
})
export class TransactionsDialogComponent implements OnInit {
  // public transaction:boolean = false;
  public myForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    // public payDialogRef: MatDialogRef<TransactionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedUser: Partial<User>
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      amount: ["", Validators.required],
      cards: ["", Validators.required],
    });
    console.log(this.selectedUser);
  }
}
