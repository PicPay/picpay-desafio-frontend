import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Card } from "src/app/data-access/transactions/interfaces/card.interface";
import { TransactionsDialogData } from "src/app/data-access/transactions/interfaces/transactions-dialog-data.interface";
import { TransactionPayload } from "src/app/data-access/transactions/interfaces/transactions-payload.interface";
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
  public cards: Card[] = [];

  constructor(
    private usersService: UsersService,
    private transacionsService: TransactionsService,
    public transactionDialog: MatDialog
  ) {}

  ngOnInit(): void {
    // fetches user list and card list from endpoint

    this.usersService.getUsers().subscribe((response) => {
      this.users = response;
    });

    this.transacionsService.getCards().subscribe((response) => {
      this.cards = response;
    });
  }

  public onClickTransactionsDialog(user: User): void {
    // opens transaction dialog

    const dialogData: TransactionsDialogData = {
      selectedUser: user,
      cards: this.cards,
    };

    let transactionsDialogRef = this.transactionDialog.open(
      TransactionsDialogComponent,
      {
        panelClass: "my-custom-dialog",
        disableClose: true,
        data: dialogData,
      }
    );

    transactionsDialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.postTransaction(response);
      }
    });
  }

  public postTransaction(transactionPayload: TransactionPayload): void {
    // callbackFunction which will be used
    // for service.postTransection success and error reponses
    const callbackFunction = (response) => {
      this.transactionDialog.open(TransactionsConfirmationDialogComponent, {
        panelClass: "my-custom-dialog",
        disableClose: true,
        data: response,
      });
    };

    this.transacionsService
      .postTransaction(transactionPayload)
      .subscribe(callbackFunction, callbackFunction);
  }
}
