import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
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
