import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { User } from "@shared/models/user";

import blackCanvas from "src/assets/blank_canvas.svg";

import { UsersService } from "@core/http/users/users.service";

type Status = "loading" | "success" | "error";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
})
export class UserListComponent implements OnInit {
  @Output() payClick = new EventEmitter();
  @Output() afterGetUsers = new EventEmitter();
  users: User[] = [];

  error = null;
  status: Status = "loading";
  placeholderSize = 10;
  blackCanvas = blackCanvas;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(
      (users) => {
        this.status = "success";
        this.users = users;
        this.afterGetUsers.emit(users);
      },
      (error) => {
        this.status = "error";
        this.error = error;
      }
    );
  }

  handlePayClick(user: User) {
    this.payClick.emit(user);
  }
}
