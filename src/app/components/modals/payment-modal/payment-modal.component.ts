import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { User } from "src/app/interfaces/user.interface";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { TransactionService } from "src/app/services/transaction/transaction.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TransactionPayload } from "src/app/interfaces/transaction.interface";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { TransactionFeedbackModalComponent } from "../transaction-feedback-modal/transaction-feedback-modal.component";

@Component({
  selector: "app-payment-modal",
  templateUrl: "./payment-modal.component.html",
  styleUrls: ["./payment-modal.component.scss"],
})
export class PaymentModalComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject<void>();
  @Input() public user: User;
  public transactionForm: FormGroup;

  public cards = [
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
    public dialogRef: MatDialogRef<PaymentModalComponent>,
    private FormBuilder: FormBuilder,
    private TransactionService: TransactionService,
    public dialog: MatDialog
  ) {
    this.transactionForm = this.FormBuilder.group({
      value: ["", Validators.required],
      card: [],
    });
  }

  ngOnInit() {}

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public onPayment(userId: number): void {
    if (this.transactionForm.invalid) {
      this.transactionForm.markAllAsTouched();
      return;
    }

    const form = this.transactionForm.getRawValue();
    const selectedCard = this.cards.find(
      (card) => card.card_number === form.card
    );

    const params: TransactionPayload = {
      card_number: selectedCard.card_number,
      cvv: selectedCard.cvv,
      expiry_date: selectedCard.expiry_date,
      destination_user_id: userId,
      value: form.value,
    };

    this.TransactionService.payload(params)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        this.dialogRef.close();
        const feedbackModal = this.dialog.open(
          TransactionFeedbackModalComponent
        );
        feedbackModal.componentInstance.transactionStatus = response;
      });
  }
}
