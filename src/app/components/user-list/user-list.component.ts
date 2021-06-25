import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  userList: User[] = new Array<User>();
  cardsList: Card[] = new Array<Card>();
  showModal: boolean = false;
  selectedUser: User;

  ngOnInit() {
    this.userService.GetUsers().subscribe(users => {
      this.userList = users;
    });

    this.userService.GetCards().subscribe(cards => {
      this.cardsList = cards;
    });
  }

  selectToPay(id: number){
    this.selectedUser = this.userList.filter(user => user.id == id)[0];

    console.log(this.selectedUser);
  }

}
