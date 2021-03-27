import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../payments/payments.module').then((m) => m.PaymentsModule),
      },
      {
        path: 'payment',
        loadChildren: () => import('../payment/payment.module').then((m) => m.PaymentModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
