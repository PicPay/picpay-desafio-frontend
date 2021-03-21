import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalPagamentoListagemCartoesComponent } from '../../modal/modal-pagamento-listagem-cartoes/modal-pagamento-listagem-cartoes.component';

@Component({
  selector: 'app-cards-usuario',
  templateUrl: './cards-usuario.component.html',
  styleUrls: ['./cards-usuario.component.scss']
})
export class CardsUsuarioComponent implements OnInit {

  @Input() nomeUsuario: string;
  @Input() idUsuario: string;
  @Input() userName: string;
  @Input() imagemUsuario: string;
  
  @Output() functionClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  pagarUsuario(){
    this.functionClick.emit(this.nomeUsuario);
  }

}
