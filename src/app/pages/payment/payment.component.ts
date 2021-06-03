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
  valuePayment = new FormControl("");
  card;
  available: boolean = false;

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
    
    this.valuePayment.valueChanges.subscribe((value) => {
      if (!value || value <= 0 || !this.card) {
        this.available = false;
      } else {
        this.available = true;
        console.log(value);
      }
    });
  }

  openListCardModal() {
    let cardModal = this.dialog.open(ListCardModalComponent);

    cardModal.afterClosed().subscribe((card) => {
      this.card = card;
      if(!this.card) {
        this.available = false
      }else {
        this.available = true;
      }
    });
  }

  sendPayment() {
    if (this.available === true) {
      this.transaction
        .sendPayment(this.user, this.valuePayment, this.card)
        .subscribe((response) => {
          this.openStatusModal(Object.values(response)[0]);
        });
    }
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

  onChange($event) {
    console.log($event)
  }
}
