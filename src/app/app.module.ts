import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { PaymentModalComponent } from "./components/modals/payment-modal/payment-modal.component";
import { HttpClientModule } from "@angular/common/http";
import { TransactionFeedbackModalComponent } from "./components/modals/transaction-feedback-modal/transaction-feedback-modal.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule } from '@angular/material';
import { NgxCurrencyModule } from "ngx-currency";

export const customCurrencyMaskConfig = {
  align: "left",
  allowNegative: false,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  min: 0,
  max: null,
};

const modals = [
  PaymentModalComponent,
  TransactionFeedbackModalComponent
];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    PaymentModalComponent,
    TransactionFeedbackModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
  ],
  providers: [],
  entryComponents: [...modals],
  bootstrap: [AppComponent],
})
export class AppModule {}
