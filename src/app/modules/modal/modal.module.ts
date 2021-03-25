import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaymentModalComponent } from "./components/payment/payment.component";
import { ReceiptComponent } from "./components/receipt/receipt.component";
import { ModalComponent } from "./components/modal/modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [PaymentModalComponent, ReceiptComponent, ModalComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [PaymentModalComponent, ReceiptComponent, ModalComponent],
})
export class ModalModule {}
