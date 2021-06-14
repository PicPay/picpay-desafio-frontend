import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalPaymentComponent } from 'src/app/components/modal-payment/modal-payment.component';
import { ModalResultComponent } from 'src/app/components/modal-result/modal-result.component';
import { TransactionService } from 'src/app/services/transaction-service/transaction.service';
import { UserService } from 'src/app/services/user-service/user.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public loadingUsers: boolean = false;
  public users = new Array<User>();
  public usersFilter = new Array<User>();
  bsModalRef: BsModalRef;

  constructor(private userService: UserService, private modalService: BsModalService, private transactionService: TransactionService) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.loadingUsers = true;
    this.userService.listUsers().subscribe(result => {
      this.users = result;
      this.usersFilter = this.users;
      this.loadingUsers = false;
    });
  }

  search(event: string) {
    this.usersFilter = this.users.filter(function(user) {
      return user.username.toLowerCase().indexOf(event.toLowerCase()) > -1 || user.name.toLowerCase().indexOf(event.toLowerCase()) > -1
    });
  }

  openModalPayment(user: User){
    const initialState = {
      user: user
    };

    this.bsModalRef = this.modalService.show(ModalPaymentComponent, {initialState});
  
    this.bsModalRef.content.onPaymentRequest.pipe(
      mergeMap((payload: TransactionPayload) => this.transactionService.createTransaction(payload))
      ).subscribe((result: TransactionResult) => {
        const initialState = {
          result: result,
          user: user
        };

        this.bsModalRef = this.modalService.show(ModalResultComponent, { initialState });
    });
  }

  trackByFn(index, item) {
    return item ? item.id : undefined;
  }
}
