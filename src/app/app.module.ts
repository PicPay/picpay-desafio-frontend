import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ModalStatusPaymentComponent } from "./components/modals/modal-status-payment/modal-status-payment.component";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
import { ButtonComponent } from "./button/button.component";
import { ModalPaymentComponent } from "./components/modals/modal-payment/modal-payment.component";
import { ListUsersComponent } from "./components/list-users/list-users.component";

@NgModule({
  declarations: [
    AppComponent,
    ModalStatusPaymentComponent,
    UserDetailComponent,
    ButtonComponent,
    ModalPaymentComponent,
    ListUsersComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
