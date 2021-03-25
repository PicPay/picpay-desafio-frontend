import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from '@shared/components/header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from '@shared/components/users/users.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, HeaderModule, UsersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
