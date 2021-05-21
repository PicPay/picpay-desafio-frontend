import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';

import { TransactionComponent } from './pages/dialogs/transaction/transaction.component';
import { ConfirmComponent } from './pages/dialogs/confirm/confirm.component';

const routes: Routes = [
  { path: "", redirectTo: 'users', pathMatch: 'full' },
  { path: "users", component: UsersComponent },
  
  { path: "transaction", component: TransactionComponent },
  { path: "confirm", component: ConfirmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }