import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ErrorDisplayComponent } from './error-display/error-display.component';
import { ModalNotificacaoComponent } from './modal-notificacao/modal-notificacao.component';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModalComponent,
    ErrorDisplayComponent,
    ModalNotificacaoComponent,
    BarraPesquisaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ModalComponent,
    ErrorDisplayComponent,
    ModalNotificacaoComponent,
    BarraPesquisaComponent
  ]
})
export class SharedModule { }
