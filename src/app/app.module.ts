import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserContainerComponent } from './users/user-container/user-container.component';
import { UserDialogComponent } from './users/user-dialog/user-dialog.component';
import { PaymentModalComponent } from './users/user-dialog/payment-modal/payment-modal.component';
import { MessageModalComponent } from './users/user-dialog/message-modal/message-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserContainerComponent,
    UserDialogComponent,
    PaymentModalComponent,
    MessageModalComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
