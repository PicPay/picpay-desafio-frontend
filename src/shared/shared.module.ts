import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ErrorDisplayComponent } from './error-display/error-display.component';
import { ModalNotificacaoComponent } from './modal-notificacao/modal-notificacao.component';



@NgModule({
  declarations: [
    ModalComponent,
    ErrorDisplayComponent,
    ModalNotificacaoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    ErrorDisplayComponent,
    ModalNotificacaoComponent
  ]
})
export class SharedModule { }
