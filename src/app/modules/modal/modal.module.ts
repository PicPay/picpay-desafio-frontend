import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReceiptComponent } from "./components/receipt/receipt.component";
import { ModalComponent } from "./modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxCurrencyModule } from "ngx-currency";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PaymentComponent } from "./components/payment/payment.component";

@NgModule({
  declarations: [ReceiptComponent, ModalComponent, PaymentComponent],
  imports: [
    NgxCurrencyModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ReceiptComponent, ModalComponent, PaymentComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ModalModule {}
