import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IResponseModal } from 'src/app/interfaces/response-modal.interface';

enum MESSAGE {
  Aprovada = 'O pagamento foi concluido com sucesso!',
  Reprovada = 'O pagamento <strong>não</strong> foi concluido com sucesso!'
}

enum STATUS {
  APROVADA = 'Aprovada',
  REPROVADA = 'Reprovada'
}

@Component({
  selector: 'app-response-modal',
  templateUrl: './response-modal.component.html',
  styleUrls: ['./response-modal.component.scss']
})

export class ResponseModalComponent implements OnInit {
  
  @Input() content: IResponseModal;
  @Output() closeResponseModal = new EventEmitter<boolean>();

  message = MESSAGE;
  status = STATUS;

  TITLE = 'Recibo de Pagamento'
  btnClose = 'Fechar'

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closeResponseModal.emit(true);
  }

}
