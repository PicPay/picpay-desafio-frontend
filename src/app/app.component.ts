import { Component, NgModule } from '@angular/core';
import { ModalPaymentComponent } from './components/modal-payment/modal-payment.component';

@NgModule({
  declarations: [ AppComponent, ModalPaymentComponent ],
  bootstrap: [ AppComponent ]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'picpay-desafio-frontend';
}
