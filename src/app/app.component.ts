import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { Card } from "./models/Card";
import { User } from "./models/User";
import { CardService } from "./services/card.service";
import { UsersService } from "./services/users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "Desafio Picpay Front-end";
  showModal: boolean = false;
  user: User = null;

  users$: Observable<User[]>;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.users$ = this.userService.getUsers();
  }

  pay(to: User): void {
    this.showModal = true;
    this.user = to;
  }

  modalClosed() {
    this.showModal = false;
    this.user = null;
  }
}
