import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material";
import { Card } from "src/app/data-access/transactions/interfaces/card.interface";
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
  public cards: Card[] = [
    // valid card
    {
      card_number: "1111111111111111",
      cvv: 789,
      expiry_date: "01/18",
    },
    // invalid card
    {
      card_number: "4111111111111234",
      cvv: 123,
      expiry_date: "01/20",
    },
  ];

  constructor(
    private usersService: UsersService,
    private transacionsService: TransactionsService,
    private formBuilder: FormBuilder,
    public dialogModal: MatDialog
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
    let transactionForm: FormGroup = this.formBuilder.group({
      amount: ["", Validators.required],
      cards: ["", Validators.required],
    });

    let transactionsDialogRef = this.dialogModal.open(
      TransactionsDialogComponent,
      {
        panelClass: "my-custom-dialog",
        data: {
          username: selectedUsername,
          form: transactionForm,
          cards: this.cards,
        },
      }
    );

    transactionsDialogRef.afterClosed().subscribe((response) => {
      console.log(response);
      if (response.form) {
        let form: FormGroup = response.form;
        console.log("form", form);
        this.createTransactionPayload(form, selectedID);
      }
    });
  }

  public createTransactionPayload(
    transactionForm: FormGroup,
    selectedID: number
  ): void {
    if (transactionForm.invalid) {
      console.log("fdsad");
      return;
    }

    let card_number: string;
    let cvv: number;
    let expiry_date: string;
    switch (transactionForm.get("cards").value) {
      case this.cards[0].card_number:
        card_number = "1111111111111111";
        cvv = 789;
        expiry_date = "01/18";
        break;
      case this.cards[1].card_number:
        card_number = "4111111111111234";
        cvv = 123;
        expiry_date = "01/20";
        break;
    }

    const destination_user_id: number = selectedID;
    const value: number = transactionForm.get("amount").value;

    const transactionPayload: TransactionPayload = {
      card_number,
      cvv,
      expiry_date,
      destination_user_id,
      value,
    };

    console.log("hora da verdade", transactionPayload);

    this.onPaidTransactionDialog(transactionPayload);
  }

  public onPaidTransactionDialog(transactionPayload: TransactionPayload): void {
    this.transacionsService
      .postTransaction(transactionPayload)
      .subscribe((response) => {
        this.dialogModal.open(TransactionsConfirmationDialogComponent, {
          panelClass: "my-custom-dialog",
          data: response,
        });
      });

    console.log("show de bola");
  }
}
