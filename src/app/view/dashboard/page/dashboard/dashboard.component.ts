import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  creditCards = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
      ownerName: 'Flávio Maran Florentino',
    },
    // invalid card
    {
      card_number: '4111111111111234'.replace(/(\d{4})?(\d{4})?(\d{4})?(\d{4})/, "$1 $2 $3 $4"),
      cvv: 123,
      expiry_date: '01/20',
      ownerName: 'Flávio Maran Florentino',
    },
  ];

}
