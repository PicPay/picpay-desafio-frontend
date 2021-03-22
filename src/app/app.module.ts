import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';

@NgModule({
  declarations: [
    AppComponent,
    PagamentoComponent,
    UsersComponent,
    ConfirmacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
