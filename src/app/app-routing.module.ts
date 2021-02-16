import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'payments',
    loadChildren: () => import('./view/payments/payments.module').then((m) => m.PaymentsModule),
  },
  {
    path: '**',
    redirectTo: 'payments',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'payments',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
