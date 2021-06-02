import { UsersService } from "./../services/users/users.service";
import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  
  listUsers: User[];
  items;


  constructor(private usersService: UsersService) {
    this.usersService.requestUsers().subscribe((user) => {
      console.log(user);
      this.listUsers = user;
    });
    this.items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  }

  ngOnInit() {
    this.usersService.requestUsers().subscribe((user) => {
      console.log(user);
      this.listUsers = user;
    });
  }

  paymentUser(user) {
    console.log(user);
  }
}
