import { Component } from "@angular/core";
import { UserService } from "./service/user.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  users$: Observable<User[]>;
  constructor(private service: UserService) {
    this.users$ = this.service.getUsers();
  }

  title = "Desafio Picpay Front-end";
}
