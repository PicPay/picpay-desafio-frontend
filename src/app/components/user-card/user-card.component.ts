import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
})
export class UserComponent {
  @Input() user: User;
  @Output() modalPayment = new EventEmitter<User>();

  constructor() {}

  showModalPayment() {
    this.modalPayment.emit(this.user);
  }
}
