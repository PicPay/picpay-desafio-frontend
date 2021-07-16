import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select'; 

import { AppComponent } from './app.component';
import { CardPaymentComponent, ModalAlert } from './card-payment/card-payment.component';
import { CardPaymentService } from './card-payment/card-payment.service';

@NgModule({
  declarations: [
    AppComponent,
    CardPaymentComponent,
    ModalAlert
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [
    CardPaymentService, 
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  entryComponents: [ModalAlert],
  bootstrap: [AppComponent]
})
export class AppModule { }
