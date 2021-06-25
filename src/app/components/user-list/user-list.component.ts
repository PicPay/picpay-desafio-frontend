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
  selectedUser: User;
  success: boolean;
  showModal: boolean = false;
  showRecipt: boolean = false;

  ngOnInit() {
    this.userService.GetUsers().subscribe(users => {
      this.userList = users;
    });
  }

  selectToPay(id: number){
    this.selectedUser = this.userList.filter(user => user.id == id)[0];
    this.showModal = true;
    console.log(this.selectedUser);
  }

  receiveCloseTransactionModal(response){
    console.log(response.status);
    this.showModal = response.modal;
    this.showRecipt = response.recipt;
    this.success = response.success;
  }

  receiveCloseReciptModal(response){
    this.showRecipt = response.recipt;
  }

}
