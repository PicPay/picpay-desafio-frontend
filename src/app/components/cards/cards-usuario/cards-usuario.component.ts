import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';

interface DadosUsuario{
  nomeUsuario: string;
  idUsuario: number;
}

@Component({
  selector: 'app-cards-usuario',
  templateUrl: './cards-usuario.component.html',
  styleUrls: ['./cards-usuario.component.scss']
})
export class CardsUsuarioComponent implements OnInit {

  @Input() nomeUsuario: string;
  @Input() idUsuario: number;
  @Input() userName: string;
  @Input() imagemUsuario: string;
  
  @Output() functionClick = new EventEmitter<DadosUsuario>();

  constructor() { }

  ngOnInit() {
  }

  pagarUsuario(){
    this.functionClick.emit({nomeUsuario: this.nomeUsuario, idUsuario: this.idUsuario});
  }

}
