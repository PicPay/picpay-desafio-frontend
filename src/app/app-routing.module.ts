import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ModalPaymentComponent } from './components/modal-payment/modal-payment.component';
import { ModalSuccessErrorComponent } from './components/modal-success-error/modal-success-error.component';


const routes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'modal-payment', component: ModalPaymentComponent },
    { path: 'modal-success-error', component: ModalSuccessErrorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
