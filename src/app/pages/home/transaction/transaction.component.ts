import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { User } from "@model/user";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import Card from "@model/card";
import { TransactionService } from "@service/transaction.service";
import { Transaction } from "@model/transaction";
import { Subscription } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-transaction",
  templateUrl: "./transaction.component.html",
  styleUrls: ["./transaction.component.scss"],
})
export class TransactionComponent {
  cardSelected: Card;
  user: User;
  favoriteSeason: string;
  paymentForm: FormGroup;
  subscriptions = new Subscription();
  isOnTransaction = false;

  cards = [
    {
      card_number: "1111111111111111",
      cvv: 789,
      expiry_date: "01/18",
    },
    {
      card_number: "4111111111111234",
      cvv: 123,
      expiry_date: "01/20",
    },
  ] as Card[];

  constructor(
    public dialogRef: MatDialogRef<TransactionComponent>,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data,
    private transactionService: TransactionService
  ) {
    this.cardSelected = this.cards[0];
    this.user = data.user;
    this.paymentForm = this.fb.group(
      {
        value: new FormControl(0.0, [
          Validators.required,
          Validators.min(10),
          Validators.max(10000),
        ]),
      },
      { updateOn: "change" }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      this.isOnTransaction = true;
      if (this.cardSelected.card_number === "1111111111111111") {
        const transaction: Transaction = {
          card_number: this.cardSelected.card_number,
          cvv: this.cardSelected.cvv,
          expiry_date: this.cardSelected.expiry_date,
          destination_user_id: this.user.id,
          value: this.paymentForm.controls["value"].value,
        };

        this.subscriptions.add(
          this.transactionService.saveTransaction(transaction).subscribe(
            (response) => {
              this.isOnTransaction = false;
              this.snackBar.open("Transação realizada com sucesso.", null, {
                panelClass: "success-toast",
                horizontalPosition: "center",
                verticalPosition: "top",
                duration: 3000,
              });
              this.dialogRef.close();
            },
            () => (this.isOnTransaction = false)
          )
        );
      } else {
        this.snackBar.open("Houve um problema durante a transação.", null, {
          panelClass: "error-toast",
          horizontalPosition: "center",
          verticalPosition: "top",
          duration: 3000,
        });
        this.isOnTransaction = false;
      }
    } else {
      this.snackBar.open(
        "É necessário preencher devidamente as informaçōes da transação.",
        null,
        {
          panelClass: "error-toast",
          horizontalPosition: "center",
          verticalPosition: "top",
          duration: 3000,
        }
      );
    }
  }

  get paymentFormControls() {
    return this.paymentForm.controls;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
