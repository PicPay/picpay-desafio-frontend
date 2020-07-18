import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { ModalPaymentComponent } from './components/modal-payment/modal-payment.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/user/user.service';
import { PaymentService } from './services/payment/payment.service';
import { MatInputModule } from '@angular/material/input';
import { ModalSuccessErrorComponent } from './components/modal-success-error/modal-success-error.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ModalPaymentComponent,
    ModalSuccessErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [
    PaymentService,
    UserService
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    UsersComponent,
    ModalPaymentComponent,
    ModalSuccessErrorComponent
  ]
})
export class AppModule { }
