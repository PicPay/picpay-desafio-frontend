import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UsuarioListagemComponent } from './components/usuario-listagem/usuario-listagem.component';
import { UsuarioPagamentoComponent } from './components/usuario-pagamento/usuario-pagamento.component';
import { UsuarioComponent } from './containers/usuario/usuario.component';

import { UsuarioService } from './services/usuario.service';
import { usuarioRoutes } from './usuario.routes';

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioPagamentoComponent,
    UsuarioListagemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(usuarioRoutes)
  ],
  providers: [
    UsuarioService
  ],
})
export class UsuarioModule { }
