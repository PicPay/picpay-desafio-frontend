import { Component, OnInit } from "@angular/core";
import { TransactionResponse } from "src/app/modules/modal/models/transactionResponse";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  showPaymentModal: boolean = false;
  showReceiptModal: boolean = false;
  transactionResponse: TransactionResponse;
  selectedUser: User;
  headerMessage: string;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.headerMessage = "Pague agora com taxa zero";
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  paymentAction(user) {
    this.selectedUser = user;
    this.showPaymentModal = !this.showPaymentModal;
  }

  paymentResponse(response) {
    this.transactionResponse = response;
    this.showReceiptModal = true;
  }

  visibilityChanged(state) {
    this.showReceiptModal = state;
    this.showPaymentModal = state;
  }
}
