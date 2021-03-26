import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Card } from "../../models/card";
import { User } from "src/app/modules/user/models/user";
import { TransactionService } from "../../services/transaction.service";
import { PaymentService } from "../../services/payment.service";
import { Helper } from "../../../../utils/helpers";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"],
  providers: [Helper],
  animations: [
    trigger("onVisibilityChange", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("0.3s ease-in-out", style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class PaymentComponent implements OnInit {
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
    this.paymentService.getCards().subscribe((cards) => {
      this.cards = cards.map((card) => {
        return {
          ...card,
          masked_number: card.card_number.replace(/\d(?=\d{4})/g, "*"),
        };
      });
    });
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
      await setTimeout(() => {
        this.transactionService
          .commitTransaction(this.currentTransaction)
          .subscribe(({ success, status }) => {
            this.transactionResponse.emit({ status, success });
            this.loading = false;
          });
      }, 2000);
    else {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      this.transactionResponse.emit({
        status: "Este não é um cartão válido!",
        success: false,
      });
    }
    this.clearForm();
  }

  getFormValue(value) {
    return this.paymentForm.controls[value].value;
  }

  clearForm() {
    this.paymentForm.reset();
    this.paymentForm.controls["card"].setValue("");
  }

  closeModal() {
    this.visibility.emit(false);
    this.clearForm();
  }
}
