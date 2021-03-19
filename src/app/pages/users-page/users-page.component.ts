import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material";
import { TransactionsService } from "src/app/data-access/transactions/transactions.service";
import { User } from "src/app/data-access/users/interfaces/users.interface";
import { UsersService } from "src/app/data-access/users/users.service";
import { TransactionsConfirmationDialogComponent } from "../dialogs/transactions-confirmation-dialog/transactions-confirmation-dialog.component";
import { TransactionsDialogComponent } from "../dialogs/transactions-dialog/transactions-dialog.component";

@Component({
  selector: "app-users-page",
  templateUrl: "./users-page.component.html",
  styleUrls: ["./users-page.component.scss"],
})
export class UsersPageComponent implements OnInit {
  public users: User[] = [];

  constructor(
    private usersService: UsersService,
    private transacionsService: TransactionsService,
    public dialogModal: MatDialog,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((response) => {
      this.users = response;
      console.log(response);
    });
  }

  public onClickTransactionsDialog(
    selectedUsername: string,
    selectedID: number
  ): void {
    // let payDialogRef: Observable<PlaceHolder>

    const transactionsDialogRef = this.dialogModal.open(
      TransactionsDialogComponent,
      {
        panelClass: "my-custom-dialog",
        data: { username: selectedUsername },
      }
    );

    transactionsDialogRef.afterClosed().subscribe((response) => {
      console.log(response);
      if (response === "true") {
        this.onPayTransactionDialog();
      }
    });
  }
  public onPayTransactionDialog(): void {
    this.transacionsService.postTransaction().subscribe((response) => {
      console.log(response.success);

      this.dialogModal.open(TransactionsConfirmationDialogComponent, {
        panelClass: "my-custom-dialog",
        data: { transactionApproval: response.success },
      });
      console.log(response);
    });

    console.log("show de bola");
  }
}
