import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'payments',
    loadChildren: () => import('./pages/payments/payments.module').then((m) => m.PaymentsModule),
  },
  {
    path: 'payment/:id',
    loadChildren: () => import('./pages/payment/payment.module').then((m) => m.PaymentModule),
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
