import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NotificaUsuarioComponent } from './components/usuario-notificacao/usuario-notificacao.component';
import { UsuarioListagemComponent } from './components/usuario-listagem/usuario-listagem.component';
import { UsuarioPagamentoComponent } from './components/usuario-pagamento/usuario-pagamento.component';
import { UsuarioComponent } from './containers/usuario/usuario.component';

import { UsuarioService } from './services/usuario.service';
import { usuarioRoutes } from './usuario.routes';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioPagamentoComponent,
    UsuarioListagemComponent,
    NotificaUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    RouterModule.forChild(usuarioRoutes)
  ],
  providers: [
    UsuarioService
  ],
})
export class UsuarioModule { }
