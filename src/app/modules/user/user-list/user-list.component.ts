import { Component, OnInit } from "@angular/core";
import { UserService, IUser } from "../user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAll().subscribe((users) => (this.users = users));
  }
}
