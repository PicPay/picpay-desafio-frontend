import { Component, OnInit, Inject, Input } from "@angular/core";
import { UsersService } from "../../services/users/users.service";
import { User } from "../../models/user.model";
import { MatDialog } from "@angular/material/dialog";
import { ModalPaymentComponent } from "../../components/modals/modal-payment/modal-payment.component";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-list-users",
  templateUrl: "./list-users.component.html",
  styleUrls: ["./list-users.component.scss"],
})
export class ListUsersComponent implements OnInit {
  @Input()
  users: User[];
  page: number = 1;
  loading: boolean = true;

  constructor(
    @Inject(UsersService) private usersService: UsersService,
    @Inject(MatDialog) public paymentModal: MatDialog
  ) {}
  ngOnInit() {
    this.usersService.getAllUsers().subscribe((response) => {
      this.users = response;
      this.loading = false;
    });
  }
  public openModalPayment(userId: number, name: string): void {
    this.paymentModal.open(ModalPaymentComponent, {
      data: { id: userId, name: name },
    });
  }
}
