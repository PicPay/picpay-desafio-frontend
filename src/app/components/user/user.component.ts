import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User } from "src/app/models/User";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output() onPay = new EventEmitter<User>();

  constructor() {}

  ngOnInit() {}

  pay() {
    this.onPay.emit(this.user);
  }
}
