import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxLoadingModule } from 'ngx-loading';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { CurrencyMaskModule } from 'ngx-currency-mask';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    NgxLoadingModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    CurrencyMaskModule
  ],
  entryComponents: [],
  providers: [
    FormBuilder,
    BsModalRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
