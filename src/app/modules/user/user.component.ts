import { Component } from "@angular/core";
import { User } from "@shared/models/user";
import { TransactionPayload } from "@shared/models/transaction";
import { FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { TransactionService } from "@core/http/transaction/transaction.service";

// Images
import successFigure from "src/assets/confirmation.svg";
import cancelFigure from "src/assets/cancel.svg";
import loadingFigure from "src/assets/loading.svg";

type Status = "idle" | "success" | "error" | "loading";

const cards = [
  // Valid card
  {
    card_number: "1111111111111111",
    cvv: 789,
    expiry_date: "01/18",
  },
  // Invalid card
  {
    card_number: "4111111111111234",
    cvv: 123,
    expiry_date: "01/20",
  },
];

@Component({
  selector: "app-user-page",
  templateUrl: "./user.component.html",
  inputs: ["currentUser"],
})
export class UserComponent {
  constructor(
    private transactionService: TransactionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Cards
  serializedCards = cards.map((card) => {
    const cardNum = card.card_number;
    return {
      ...card,
      label: `Cartão com final ${cardNum.slice(cardNum.length - 4)}`,
    };
  });

  // FST
  status: Status = "idle";
  error = null;

  successFigure = successFigure;
  cancelFigure = cancelFigure;
  loadingFigure = loadingFigure;

  // Form
  currentUser: User = null;

  handlePayClick(user: User) {
    this.currentUser = user;
    history.pushState(null, null, `${user.id}`);
  }

  handleAfterGetUsers(users: User[]) {
    const userId = this.route.snapshot.paramMap.get("userId");

    if (userId) {
      this.currentUser = users.find((user) => user.id === Number(userId));
    }
  }

  handleCancelOperation() {
    this.currentUser = null;
    this.status = "idle";
    history.pushState(null, null, `/`);
  }

  handleTryAgain() {
    this.error = null;
    this.status = "idle";
  }

  handlePayFormSubmit(payForm: FormGroup) {
    this.status = "loading";

    const { value, card } = payForm.value;
    const { card_number, cvv, expiry_date } = this.serializedCards.find(
      (serializedCard) => serializedCard.label === card
    );

    const payload: TransactionPayload = {
      value,
      card_number,
      cvv,
      expiry_date,
      destination_user_id: this.currentUser.id,
    };

    this.transactionService.createTransaction(payload).subscribe(
      () => {
        this.status = "success";
      },
      (error) => {
        this.status = "error";
        this.error = error;
      }
    );
  }
}
