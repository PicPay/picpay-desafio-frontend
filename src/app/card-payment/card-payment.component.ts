import { Component, OnInit } from '@angular/core';
import { CardPaymentService } from './card-payment.service';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.scss']
})

// interface User {
//   id: number;
//   name: string;
//   img: string;
//   username: string;
// }

export class CardPaymentComponent implements OnInit {

  users;
  
  constructor(private service: CardPaymentService) { }

  loadUsers(){
    return this.service.userList().subscribe(data => {
      this.users = data;
      console.log(this.users)
    })
  }

  ngOnInit() {
    this.loadUsers();
  }

}
