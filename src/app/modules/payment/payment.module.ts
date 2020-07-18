import { CardCreateComponent } from './card/card-create/card-create.component';
import { CardReadComponent } from './card/card-read/card-read.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './payment-route.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MaskNumber } from './card/card.pipe';


@NgModule({
  declarations: [
    UsersComponent,
    PaymentComponent,
    CheckoutComponent,
    CardCreateComponent,
    CardReadComponent,
    MaskNumber
  ],
  imports: [
    PaymentRoutingModule,
    CommonModule,
    NgxCurrencyModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  exports: [PaymentComponent]
})
export class PaymentModule { }
