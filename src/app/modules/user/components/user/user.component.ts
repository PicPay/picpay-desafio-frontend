import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User } from "../../models/user";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output() onPayment: EventEmitter<User> = new EventEmitter<User>();
  constructor() {}

  ngOnInit() {}
  paymentAction(user) {
    this.onPayment.emit(user);
  }
}
