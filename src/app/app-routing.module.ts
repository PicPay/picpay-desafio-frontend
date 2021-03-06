import { PaymentUserDialogComponent } from './components/user/payment-user-dialog/payment-user-dialog.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: "users/payment/:id",
        component: PaymentUserDialogComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
