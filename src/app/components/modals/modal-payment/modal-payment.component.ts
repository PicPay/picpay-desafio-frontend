import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { PaymentService } from "../../../services/payment/payment.service";
import { TransactionResponse } from "src/app/models/transactionResponse.model";
import { TransactionPayload } from "../../../models/transaction.model";
import { User } from "../../../models/user.model";
import { Card } from "../../../models/card.model";
import { CardService } from "../../../services/card/card.service";
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from "@angular/forms";

@Component({
  selector: "app-modal-payment",
  templateUrl: "./modal-payment.component.html",
  styleUrls: ["./modal-payment.component.scss"],
})
export class ModalPaymentComponent implements OnInit {
  private cards: Card[];
  private card: [];
  private transactionPayload: TransactionPayload;
  transactionForm: FormGroup;

  transactionResponse: TransactionResponse;

  constructor(
    public dialogRef: MatDialogRef<ModalPaymentComponent>,
    private paymentService: PaymentService,
    private cardService: CardService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.transactionForm = this.formBuilder.group({
      valuePayment: [
        "",
        Validators.compose([
          Validators.required,
          Validators.min(0.01),
          Validators.max(1000.0),
        ]),
      ],
      card: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.cards = this.cardService.getCards();
    console.log(this.cards)
  }

  public sendPayment() {
    const card_number: string = this.transactionForm.get("card").value;
    const value: number = this.transactionForm.get("valuePayment").value;
    console.log(card_number, value);

    // if (this.transactionForm.get("card").value === 1111111111111111) {
    //   const transactionPayload: TransactionPayload = {
    //     card_number,
    //     value,
    //     cvv: returnData[1].cvv,
    //     expiry_date: returnData[1].expiry_date,
    //   };
    // } else {
    //   const transactionPayload: TransactionPayload = {
    //     card_number,
    //     value,
    //     cvv: returnData[1].cvv,
    //     expiry_date: returnData[1].expiry_date,
    //   };
    // }

    this.paymentService
      .SendPayment(this.transactionPayload)
      .subscribe((response: TransactionResponse) => {
        this.transactionResponse = response;
        console.log(this.transactionResponse);
      });
  }
  close(): void {
    this.dialogRef.close();
  }
}
