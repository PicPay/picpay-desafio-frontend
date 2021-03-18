import { Component } from '@angular/core';

import { AppService } from './services/app-service/app.service';
import { TransactionService } from './services/transaction-service/transaction.service';
import { UsersPaymentService } from './services/users-payment-service/users-payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ AppService, UsersPaymentService, TransactionService ]
})
export class AppComponent {
  title = 'Desafio Picpay Front-end';

  
}
