import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { PaymentService } from "../../../services/payment/payment.service";
import { TransactionResponse } from "src/app/models/transactionResponse.model";
import { TransactionPayload } from "../../../models/transaction.model";
import { Card } from "../../../models/card.model";
import { CardService } from "../../../services/card/card.service";
import { MatDialog } from "@angular/material/dialog";
import { ModalStatusPaymentComponent } from "../modal-status-payment/modal-status-payment.component";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-modal-payment",
  templateUrl: "./modal-payment.component.html",
  styleUrls: ["./modal-payment.component.scss"],
})
export class ModalPaymentComponent implements OnInit {
  private cards: Card[];
  private userId: number;
  public name: string;
  transactionForm: FormGroup;
  transactionResponse: TransactionResponse;

  constructor(
    public dialogRef: MatDialogRef<ModalPaymentComponent>,
    private paymentService: PaymentService,
    private cardService: CardService,
    private formBuilder: FormBuilder,
    public paymentModal: MatDialog,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.userId = data.id;
    this.name = data.name;
    this.transactionForm = this.formBuilder.group({
      valuePayment: ["", [Validators.required, Validators.min(0.01)]],
      card: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.cards = this.cardService.getCards();
  }

  public sendPayment() {
    const card_number: string = this.transactionForm.get("card").value;
    const value: number = this.transactionForm.get("valuePayment").value;
    const dataCard = this.cards.filter(
      (card) => card.card_number == card_number
    )[0];

    const transactionPayload: TransactionPayload = {
      card_number,
      value,
      cvv: dataCard.cvv,
      expiry_date: dataCard.expiry_date,
      destination_user_id: this.userId,
    };
    if (this.transactionForm.valid) {
      if (this.validCardNumber(card_number)) {
        this.paymentService
          .SendPayment(transactionPayload)
          .subscribe((response: TransactionResponse) => {
            this.transactionResponse = response;
            console.log(this.transactionResponse);

            this.paymentModal.open(ModalStatusPaymentComponent, {
              data: {
                type: true,
                message: "O pagamento foi concluido com sucesso.",
              },
            });
          });
        this.dialogRef.close();
      } else {
        this.paymentModal.open(ModalStatusPaymentComponent, {
          data: {
            type: false,
            message: "O pagamento não foi concluido com sucesso.",
          },
        });
        this.dialogRef.close();
      }
    } else {
      alert("Something went wrong... Please, insert a value!");
    }
  }

  validCardNumber(cardNumber: string): boolean {
    return cardNumber == "1111111111111111";
  }
}
