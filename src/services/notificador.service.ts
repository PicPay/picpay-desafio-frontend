import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notificacao } from 'src/models/Notificacao';

@Injectable({
  providedIn: 'root'
})
export class NotificadorService {
  notificadorModal = new Subject<Notificacao>();

  constructor() { }

  notificar(titulo: string, msg: string) {
    this.notificadorModal.next(new Notificacao(titulo, msg));
  }
}
