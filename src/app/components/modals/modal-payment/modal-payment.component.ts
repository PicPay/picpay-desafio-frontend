import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { PaymentService } from "../../../services/payment/payment.service";
import { Observable, throwError } from "rxjs";
import { User } from "../../../models/user.model";
import { TransactionResponse } from "src/app/models/transactionResponse.model";
import { TransactionPayload } from "../../../models/transaction.model";

@Component({
  selector: "app-modal-payment",
  templateUrl: "./modal-payment.component.html",
  styleUrls: ["./modal-payment.component.scss"],
})
export class ModalPaymentComponent implements OnInit {
  public user: User[];
  public response: TransactionResponse[];
  public transactionPayload: TransactionPayload;

  constructor(
    public dialogRef: MatDialogRef<ModalPaymentComponent>,
    private paymentService: PaymentService,

    @Inject(MAT_DIALOG_DATA) data
  ) {}

  ngOnInit() {
    this.paymentService
      .SendPayment(this.transactionPayload)
      .subscribe((response: TransactionResponse) => {
        console.log(response);
      });
  }

  close(): void {
    console;
    this.dialogRef.close();
  }
}
