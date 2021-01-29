import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { UserRowComponent } from './components/user-row/user-row.component';
import { ModalComponent } from './components/modal/modal.component';
import { HomeComponent } from './pages/home/home.component';
import { PagamentoModalComponent } from './components/pagamento-modal/pagamento-modal.component';
import { PagamentoConcluidoModalComponent } from './components/pagamento-concluido-modal/pagamento-concluido-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    UserRowComponent,
    ModalComponent,
    HomeComponent,
    PagamentoModalComponent,
    PagamentoConcluidoModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
