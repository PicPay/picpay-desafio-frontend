import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    PagamentoComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
