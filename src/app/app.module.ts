import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from '@shared/components/header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from '@shared/components/navbar/navbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, HeaderModule, NavbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
