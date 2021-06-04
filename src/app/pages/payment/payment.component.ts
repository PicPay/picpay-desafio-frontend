import { TransactionService } from "./../../services/transaction/transaction.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "src/app/models/user";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ListCardModalComponent } from "src/app/components/list-card-modal/list-card-modal.component";
import { ModalStatusComponent } from "src/app/components/modal-status/modal-status.component";
import { UsersService } from "src/app/services/users/users.service";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"],
})
export class PaymentComponent implements OnInit {
  user: User;
  valuePayment = new FormControl("");
  card;
  available: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private transaction: TransactionService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((urlQuery) => {
      return this.usersService.get(urlQuery.get('id')).subscribe((user) => {
        this.user = user
      });
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
        this.available = false;
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
        this.available = false;
        this.router.navigate(["/"]);
      }, 3000);
    });
  }

  onChange($event) {
    console.log($event)
  }
}
