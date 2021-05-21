import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { TransactionComponent } from './pages/dialogs/transaction/transaction.component';
import { ConfirmComponent } from './pages/dialogs/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TransactionComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
