import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BotaoComponent } from './components/botao/botao.component';
import { ModalPagamentoListagemCartoesComponent } from './components/modal/modal-pagamento-listagem-cartoes/modal-pagamento-listagem-cartoes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsUsuarioComponent } from './components/cards/cards-usuario/cards-usuario.component';
import { ModalReciboPagamentoComponent } from './components/modal/modal-recibo-pagamento/modal-recibo-pagamento.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { DemoMaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { GeneralService } from './services/general-service.service';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    ModalPagamentoListagemCartoesComponent,
    CardsUsuarioComponent,
    ModalReciboPagamentoComponent,
    DropDownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule
  ],
  entryComponents: [
    ModalPagamentoListagemCartoesComponent,
    ModalReciboPagamentoComponent
  ],
  providers: [
    GeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
