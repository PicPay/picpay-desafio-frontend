import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.scss"],
})
export class ListUserComponent implements OnInit {
  @Input() users: User[];
  userSelected: User;
  aprovedTransaction: boolean;
  p: number = 1;
  cards: Card[] = [
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
  constructor() {}

  showModalStatus: boolean = false;
  showModalPayment: boolean = false;

  modalPayment(user: User) {
    this.showModalPayment = true;
    this.userSelected = user;
  }

  modalStatus(aproved: boolean) {
    this.aprovedTransaction = aproved;
    this.showModalPayment = false;
    this.showModalStatus = true;
  }

  toCloseModal(closeModal: boolean) {
    this.showModalPayment = false;
    this.showModalStatus = false;
  }

  ngOnInit() {}
}
