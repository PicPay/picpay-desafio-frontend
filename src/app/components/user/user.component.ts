import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output() modalPayment = new EventEmitter<User>();

  constructor() {}

  ngOnInit() {}

  showModalPayment() {
    this.modalPayment.emit(this.user);
  }
}
