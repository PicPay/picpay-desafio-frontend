import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select'; 

import { AppComponent } from './app.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { CardPaymentService } from './card-payment/card-payment.service';

@NgModule({
  declarations: [
    AppComponent,
    CardPaymentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
