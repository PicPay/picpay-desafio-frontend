import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxMaskModule, IConfig } from "ngx-mask";

import { AppComponent } from "./app.component";
import { UserComponent } from "./components/user-card/user-card.component";
import { ListUserComponent } from "./components/users-payment/users-payment.component";
import { PaymentModalComponent } from "./components/payment-modal/payment-modal.component";
import { StatusPaymentModalComponent } from "./components/status-payment-modal/status-payment-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ListUserComponent,
    PaymentModalComponent,
    StatusPaymentModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
