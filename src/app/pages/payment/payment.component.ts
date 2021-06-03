import { TransactionService } from "./../../services/transaction/transaction.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/models/user";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ListCardModalComponent } from "src/app/components/list-card-modal/list-card-modal.component";
import { ModalStatusComponent } from "src/app/components/modal-status/modal-status.component";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"],
})
export class PaymentComponent implements OnInit {
  listUser;
  user: User;
  valor = new FormControl("");
  card;
  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private transaction: TransactionService
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.listUser = { ...params.keys, ...params };
      this.user = this.listUser.params;
    });
  }

  openListCardModal() {
    let cardModal = this.dialog.open(ListCardModalComponent);

    cardModal.afterClosed().subscribe((card) => {
      this.card = card;
    });
  }

  sendPayment() {
    this.transaction
      .sendPayment(this.user, this.valor, this.card)
      .subscribe((response) => {
        this.openStatusModal(Object.values(response)[0]);
      });
  }

  private openStatusModal(status) {
    const modalStatus = this.dialog.open(ModalStatusComponent, {
      data: status,
    });

    modalStatus.afterOpened().subscribe((_) => {
      setTimeout(() => {
        modalStatus.close();
      }, 1000);
    });
  }
}
