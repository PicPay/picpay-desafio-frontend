import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BotaoComponent } from './components/botao/botao.component';
import { ModalPagamentoListagemCartoesComponent } from './components/modal/modal-pagamento-listagem-cartoes/modal-pagamento-listagem-cartoes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsUsuarioComponent } from './components/cards/cards-usuario/cards-usuario.component';
import { ModalReciboPagamentoComponent } from './components/modal/modal-recibo-pagamento/modal-recibo-pagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    ModalPagamentoListagemCartoesComponent,
    CardsUsuarioComponent,
    ModalReciboPagamentoComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    ModalPagamentoListagemCartoesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
