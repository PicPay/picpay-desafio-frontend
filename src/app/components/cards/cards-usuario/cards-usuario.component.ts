import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';

interface DadosUsuario {
  nomeUsuario: string;
  idUsuario: number;
}

@Component({
  selector: 'app-cards-usuario',
  templateUrl: './cards-usuario.component.html',
  styleUrls: ['./cards-usuario.component.scss']
})
export class CardsUsuarioComponent implements OnInit {

  // Recebe o nome do usuário, id, userName e a imagem, para passar para o HTML.
  @Input() nomeUsuario: string;
  @Input() idUsuario: number;
  @Input() userName: string;
  @Input() imagemUsuario: string;

  // Chama um evento que chama a modal de pagamento e listagem de cartões.
  @Output() functionClick = new EventEmitter<DadosUsuario>();

  constructor() { }

  ngOnInit() {
  }

  // Quando clicar no botão de pagar de cada usuário, é chamamado o functionClick e emitindo a modal
  // de pagamento e listagem de cartões, passando no nome do usuário (utilizado na modal) e o id do 
  // usuário para o preenchimento da transação de pagamento.
  pagarUsuario() {
    this.functionClick.emit({ nomeUsuario: this.nomeUsuario, idUsuario: this.idUsuario });
  }

}
