import { Component } from "@angular/core";
import { UserService } from "../service/user-payment.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  template: ` <div class="users-container">
    <users-payment [users]="users$ | async"> </users-payment>
  </div>`,
})
export class AppComponent {
  users$: Observable<User[]>;
  constructor(private service: UserService) {
    this.users$ = this.service.getUsers();
  }

  title = "Desafio Picpay Front-end";
}
