import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificadorService } from 'src/services/notificador.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-modal-notificacao',
  templateUrl: './modal-notificacao.component.html',
  styleUrls: ['./modal-notificacao.component.scss']
})
export class ModalNotificacaoComponent implements OnInit, OnDestroy {
  @ViewChild(ModalComponent, {static: true}) modal: ModalComponent;

  sub: Subscription;
  titulo: string;
  msg: string;

  constructor(
    private notificadorService: NotificadorService
  ) { }

  ngOnInit() {
    this.sub = this.notificadorService.notificadorModal.subscribe(notificacao => {
      this.titulo = notificacao.titulo;
      this.msg = notificacao.msg;
      this.modal.toggle();
    })
  }

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }

}
