import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppComponent } from './app.component';
import { ModalComponent } from './utils/modal/modal.component';
import { UsersComponent } from './payment/users/users.component';
import { LoadingComponent } from './utils/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    UsersComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CurrencyMaskModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
