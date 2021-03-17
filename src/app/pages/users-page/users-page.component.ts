import { Component, OnInit } from "@angular/core";
import { User } from "src/app/data-access/users/users.interface";
import { UsersService } from "src/app/data-access/users/users.service";

@Component({
  selector: "app-users-page",
  templateUrl: "./users-page.component.html",
  styleUrls: ["./users-page.component.scss"],
})
export class UsersPageComponent implements OnInit {
  public users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((response) => {
      this.users = response;
      console.log(response);
    });
  }
}
