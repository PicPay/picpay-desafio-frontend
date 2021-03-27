import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderModule } from '@shared/components/header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from '@shared/components/navbar/navbar.module';

import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, HeaderModule, NavbarModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
