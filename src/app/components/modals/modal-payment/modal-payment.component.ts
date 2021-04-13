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

  redirectModal(type, message) {
    return this.paymentModal.open(ModalStatusPaymentComponent, {
      data: {
        type: type,
        message: message,
      },
    });
  }

  generatePayload(cardNumber, value, cvv, expiry_date, destination_user_id) {
    return {
      card_number: cardNumber,
      value: value,
      cvv: cvv,
      expiry_date: expiry_date,
      destination_user_id: destination_user_id,
    };
  }

  closeModal() {
    this.dialogRef.close();
  }

  public sendPayment() {
    const card_number: string = this.transactionForm.get("card").value;
    const value: number = this.transactionForm.get("valuePayment").value;
    const dataCard = this.cards.filter(
      (card) => card.card_number == card_number
    )[0];

    const transactionPayload: TransactionPayload = this.generatePayload(card_number, value, dataCard.cvv, dataCard.expiry_date, this.userId);

    if (this.transactionForm.valid) {
      if (this.validCardNumber(card_number)) {
        this.paymentService
          .SendPayment(transactionPayload)
          .subscribe((response: TransactionResponse) => {
            this.transactionResponse = response;
            this.redirectModal(true, "O pagamento foi concluido com sucesso.");
          });
        this.dialogRef.close();
        return
      } 
      this.redirectModal(false, "O pagamento não foi concluido com sucesso.");
      this.dialogRef.close();
      return;
    }
    alert("Something went wrong... Please, insert a value!");
  }

  validCardNumber(cardNumber: string): boolean {
    return cardNumber == "1111111111111111";
  }
}
