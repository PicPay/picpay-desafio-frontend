import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplatesModule } from 'src/templates/templates.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ItemUsuarioComponent } from './lista-usuarios/components/item-usuario/item-usuario.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    ItemUsuarioComponent
  ],
  imports: [
    BrowserModule,
    TemplatesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
