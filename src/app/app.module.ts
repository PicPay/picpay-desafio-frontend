import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UsersComponent } from "./components/users/users.component";
import { UserComponent } from "./components/user/user.component";
import { HttpClientModule } from "@angular/common/http";
import { PaymentModalComponent } from "./components/payment-modal/payment-modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardMaskPipe } from './pipes/card-mask.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PaymentModalComponent,
    CardMaskPipe,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
