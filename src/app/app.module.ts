import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UserListComponent } from "./user-list/user-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { PaymentModalComponent } from "./payment-modal/payment-modal.component";
import { FormsModule } from "@angular/forms";
import {
  MatIconModule,
  MatCardModule,
  MatButtonModule,
} from "@angular/material";

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { ListCardModalComponent } from './list-card-modal/list-card-modal.component';
import { HeaderComponent } from "./components/header/header.component";

registerLocaleData(localePt, "pt");

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    PaymentModalComponent,
    ListCardModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
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
