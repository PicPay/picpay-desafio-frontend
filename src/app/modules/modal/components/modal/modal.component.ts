import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Card } from "src/app/modules/transaction/models/card";
import { User } from "src/app/modules/user/models/user";
import { TransactionService } from "src/app/modules/transaction/transaction.service";
import { PaymentService } from "../../services/payment.service";
import { Helper } from "../../../../utils/helpers";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
  providers: [Helper],
})
export class ModalComponent implements OnInit {
  @Input() isVisible: boolean;
  @Input() user: User;
  @Output() visibility: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  transactionResponse: EventEmitter<TransactionResponse> = new EventEmitter<TransactionResponse>();
  cards: Card[] = [];
  currentTransaction: Transatcion;
  loading: boolean = false;
  paymentForm: FormGroup = new FormGroup({
    value: new FormControl("", Validators.required),
    card: new FormControl("", Validators.required),
  });

  constructor(
    private helper: Helper,
    private paymentService: PaymentService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.paymentService.getCards().subscribe((cards) => (this.cards = cards));
  }

  async getTransaction() {
    this.loading = true;
    this.currentTransaction = {
      transcation_id: Math.ceil(Math.random() * 100),
      destination_user_id: this.user.id,
      value: this.getFormValue("value"),
      ...this.getFormValue("card"),
    };

    const validCard = this.helper.checkExpirationDate(
      this.currentTransaction.expiry_date
    );
    if (validCard)
      await this.transactionService
        .commitTransaction(this.currentTransaction)
        .subscribe(({ success, status }) => {
          this.transactionResponse.emit({ status, success });
          this.loading = false;
        });
    else {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      this.transactionResponse.emit({
        status: "Este não é um cartão válido!",
        success: false,
      });
    }

    this.paymentForm.reset();
  }

  getFormValue(value) {
    return this.paymentForm.controls[value].value;
  }

  closeModal() {
    this.paymentForm.reset();
    this.visibility.emit(false);
  }
}
