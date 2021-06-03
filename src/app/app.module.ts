import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";

import { FormsModule } from "@angular/forms";
import {
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
} from "@angular/material";

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { AvatarComponent } from "./components/avatar/avatar.component";
import { PrimaryGreenButtonComponent } from "./components/primary-green-button/primary-green-button.component";
import { HttpClientModule } from "@angular/common/http";
import { UserListComponent } from "./pages/user-list/user-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { PaymentComponent } from "./pages/payment/payment.component";
import { NgxCurrencyModule } from "ngx-currency";
import { ListCardModalComponent } from "./components/list-card-modal/list-card-modal.component";

registerLocaleData(localePt, "pt");

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    ListCardModalComponent,
    AvatarComponent,
    PrimaryGreenButtonComponent,
    PaymentComponent,
  ],
  entryComponents: [ListCardModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    NgxCurrencyModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt" },
    {
      provide: LOCALE_ID,
      useValue: "BRL",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
