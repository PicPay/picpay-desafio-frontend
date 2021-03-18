import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Observable } from "rxjs";
import { User } from "src/app/data-access/users/interfaces/users.interface";
import { UsersService } from "src/app/data-access/users/users.service";
import { TransactionsConfirmationDialogComponent } from "../dialogs/transactions-confirmation-dialog/transactions-confirmation-dialog.component";
import { TransactionsDialogComponent } from "../dialogs/transactions-dialog/transactions-dialog.component";

@Component({
  selector: "app-users-page",
  templateUrl: "./users-page.component.html",
  styleUrls: ["./users-page.component.scss"],
})
export class UsersPageComponent implements OnInit {
  public users: User[] = [];

  constructor(
    private usersService: UsersService,
    public dialogModal: MatDialog
  ) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((response) => {
      this.users = response;
      console.log(response);
    });
  }

  public onPayDialog(selectedUsername: string): void {
    // let payDialogRef: Observable<PlaceHolder>

    let payDialogRef = this.dialogModal.open(TransactionsDialogComponent, {
      panelClass: "my-custom-dialog",
      data: { username: selectedUsername },
    });

    payDialogRef.afterClosed().subscribe((response) => {
      console.log(response);
      if (response === "true") {
        this.dialogModal.open(TransactionsConfirmationDialogComponent, {
          panelClass: "my-custom-dialog",
          data: { username: selectedUsername },
        });
      }
    });
  }
}
