import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  userList: User[] = new Array<User>();
  filteredList: User[] = new Array<User>();
  selectedUser: User;
  showModal = false;
  showRecipt = false;
  transactionInfo: TransactionInfo;

  ngOnInit() {
    this.userService.GetUsers().subscribe(users => {
      this.userList = users;
      this.filteredList = this.userList;
    });
  }

  selectToPay(id: number) {
    this.selectedUser = this.userList.filter(user => user.id === id)[0];
    this.showModal = true;
  }

  receiveCloseTransactionModal(response) {
    this.showModal = response.modal;
    this.showRecipt = response.recipt;
    this.transactionInfo = response;
  }

  receiveCloseReciptModal(response) {
    this.showRecipt = response.recipt;
  }

  onSearchChange(searchValue: string): void {
    this.filteredList = this.userList.filter(user => {
      return user.name.toLowerCase().includes(searchValue) || user.username.toLowerCase().includes(searchValue);
    });
  }

}
