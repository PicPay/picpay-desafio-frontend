import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from 'src/app/models/user/user.model';
import { ModalService } from '../template/modal/modal.service';
import { TransactionPayload } from 'src/app/models/payment/transaction-payload.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private modalService: ModalService) { }
  users: User[];
  showModal = false;
  showMessage = false;
  user: User;
  message: PaymentResponse;
 
  transaction: TransactionPayload = {
    card_number: '',
    cvv: 0,
    expiry_date: '',
    destination_user_id: 0,
    value: 0,
    user: this.user
  };

  ngOnInit() {
    if (!this.users) {
      this.getUsers();
    }
  }

  getUsers(): void {
    this.userService
      .get()
      .subscribe(o => {
        this.users = o;
      });
  }

  selectUser(user: User): void {
    this.user = user;
    this.showModal = true;
  }

  open(id: string, user: User) {
    this.modalService.add(id);
    this.modalService.open(id);
    this.selectUser(user)
    this.mockTransaction(user)
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  getResponseMessage(e): void {
    this.message = e;
    this.showMessage = true;
    this.modalService.close('payment-modal')
    this.modalService.open('message-modal')
  }

  mockTransaction(user: User) {
    this.transaction.destination_user_id = user.id;
    this.transaction.value = 0;
    this.transaction.user = user;
    this.transaction.card_number = '';
  }
}