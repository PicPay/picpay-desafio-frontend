import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialDesignModule } from "./modules/material-design/material-design-module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxCurrencyModule } from "ngx-currency";
import { LoaderComponent } from './components/loader/loader.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentModalComponent } from "./components/payment/components/payment-modal/payment-modal.component";
import { MessageComponent } from './components/message/message.component';
import { MessageModalComponent } from './components/message/components/message-modal/message-modal.component';



@NgModule({
    declarations: [PaymentComponent, LoaderComponent, PaymentComponent, PaymentModalComponent, MessageComponent, MessageModalComponent],
    imports: [
        CommonModule, 
        MaterialDesignModule, 
        FormsModule,
        ReactiveFormsModule,
        NgxCurrencyModule 
    ],
    exports: [
        MaterialDesignModule, 
        PaymentComponent, 
        MessageComponent,
        LoaderComponent,
        NgxCurrencyModule
    ],
    entryComponents: [
        PaymentModalComponent,
        MessageModalComponent
    ],
})
export class SharedModule { }