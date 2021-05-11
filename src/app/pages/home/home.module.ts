import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ListUsersComponent } from 'src/app/components/list-users/list-users.component';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { ModalBaseComponent } from 'src/app/components/modal-base/modal-base.component';
import { TransactionResultComponent } from 'src/app/components/transaction-result/transaction-result.component';
import { UserPaymentComponent } from 'src/app/components/user-payment/user-payment.component';
import { UserComponent } from 'src/app/components/user/user.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    UserComponent,
    ListUsersComponent,
    UserPaymentComponent,
    ModalBaseComponent,
    LoaderComponent,
    TransactionResultComponent,
    HomeComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    CurrencyMaskModule,
    ReactiveFormsModule
  ],

  exports: [
    UserPaymentComponent,
    TransactionResultComponent
  ],

  entryComponents: [
    UserPaymentComponent,
    TransactionResultComponent
  ]
})
export class HomeModule { }
