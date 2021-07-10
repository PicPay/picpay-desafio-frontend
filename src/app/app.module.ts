import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, UsersComponent, TransactionComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, LazyLoadImageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
