import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  // cards = [
  //   // valid card
  //   {
  //     card_number: '1111111111111111',
  //     cvv: 789,
  //     expiry_date: '01/18',
  //   },
  //   // invalid card
  //   {
  //     card_number: '4111111111111234',
  //     cvv: 123,
  //     expiry_date: '01/20',
  //   },
  // ];

  users: Object[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService
      .listUser()
      .subscribe(users => this.users = users);

    // http
    //   .get<Object[]>('https://api.github.com/users')
    //   .subscribe(users => {
    //     console.log(users);
    //     this.users = users,

    //     err => console.log(err)
    //   })
  }
}
