import { CardReadComponent } from './card/card-read/card-read.component';
import { CardCreateComponent } from './card/card-create/card-create.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const ROUTES: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'pagamento',
    component: CheckoutComponent
  },
  {
    path: 'novo-cartao',
    component: CardCreateComponent
  },
  {
    path: 'cartoes',
    component: CardReadComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
