import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ModalStatusPaymentComponent } from "./components/modals/modal-status-payment/modal-status-payment.component";
import { ButtonComponent } from "./button/button.component";
import { ModalPaymentComponent } from "./components/modals/modal-payment/modal-payment.component";
import { ListUsersComponent } from "./components/list-users/list-users.component";
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ModalStatusPaymentComponent,
    ButtonComponent,
    ModalPaymentComponent,
    ListUsersComponent,
   
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot([]), AppRoutingModule, BrowserAnimationsModule, MatDialogModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalPaymentComponent, ModalStatusPaymentComponent],
})
export class AppModule {}
