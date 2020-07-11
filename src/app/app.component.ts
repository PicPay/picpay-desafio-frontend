import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Desafio Picpay Front-end';
 
  cards = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  users: Object[] = [];

  constructor(http: HttpClient) {

    http
    .get<Object[]>('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
    .subscribe(users => this.users = users)

    // http
    //   .get<Object[]>('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
    //   .subscribe(users => {
    //     console.log(users);
    //     this.users = users
    //   })
  }
}
