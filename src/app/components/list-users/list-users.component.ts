import { Component, OnInit, Inject, Input } from "@angular/core";
import { UsersService } from "../../services/users/users.service";
import { User } from "../../models/user.model";
import { MatDialog } from "@angular/material/dialog";
import { ModalPaymentComponent } from "../../components/modals/modal-payment/modal-payment.component";


@Component({
  selector: "app-list-users",
  templateUrl: "./list-users.component.html",
  styleUrls: ["./list-users.component.scss"],
})
export class ListUsersComponent implements OnInit {
  // public users: User[];
  @Input()
    users: User[];

  constructor(
    @Inject(UsersService) private usersService: UsersService,
    @Inject(MatDialog) public paymentModal: MatDialog,
  ) {

  }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((response) => {
      this.users = response;
    });
  }

 
  public openModalPayment(): void {
    this.paymentModal.open(ModalPaymentComponent, {
      data: this.users,
      
    });
  }
}
