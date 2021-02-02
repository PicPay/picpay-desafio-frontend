import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Card } from "src/app/models/Card";
import { TransactionPayload } from "src/app/models/TransactionPayload";
import { User } from "src/app/models/User";
import { CardService } from "src/app/services/card.service";
import { PaymentService } from "src/app/services/payment.service";

@Component({
  selector: "app-payment-modal",
  templateUrl: "./payment-modal.component.html",
  styleUrls: ["./payment-modal.component.scss"],
})
export class PaymentModalComponent implements OnInit {
  @Input() showModal: boolean;
  @Input() selectedUser: User;
  @Output() onModalClosed = new EventEmitter<any>();

  showConfirmation: boolean = false;
  hasError: boolean = false;
  cards$: Observable<Card[]>;
  form: FormGroup;

  constructor(
    private cardService: CardService,
    private paymentService: PaymentService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      value: [
        "",
        Validators.compose([Validators.min(0.01), Validators.required]),
      ],
      card: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cards$ = this.cardService.getCards();
  }

  private getSelectedCard(cardNumber: string): Card {
    let card: Card;
    this.cards$.subscribe((cards) => {
      card = cards.find((c) => c.card_number === cardNumber);
    });
    return card;
  }

  hideModal(): void {
    this.onModalClosed.next({});
  }

  submit(event: any): void {
    event && event.preventDefault();
    const value = this.form.get("value").value;
    const card_number = this.form.get("card").value;
    const card = this.getSelectedCard(card_number);
    const transaction: TransactionPayload = {
      card_number: card.card_number,
      cvv: card.cvv,
      expiry_date: card.expiry_date,
      destination_user_id: this.selectedUser.id,
      value: Number.parseFloat(value),
    };

    this.paymentService.createTransaction(transaction).subscribe((res) => {
      this.showConfirmation = true;
      this.hasError = !res.success;
    });
  }
}
