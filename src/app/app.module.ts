import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplatesModule } from 'src/templates/templates.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ItemUsuarioComponent } from './lista-usuarios/components/item-usuario/item-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/shared/shared.module';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    ItemUsuarioComponent,
    PagamentoComponent
  ],
  imports: [
    BrowserModule,
    TemplatesModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
