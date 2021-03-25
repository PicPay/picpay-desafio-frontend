import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/payments', pathMatch: 'full' },
  {
    path: ':id',
    outlet: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then((m) => m.PaymentModule),
  },
  {
    path: 'payments',
    loadChildren: () => import('./pages/payments/payments.module').then((m) => m.PaymentsModule),
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
