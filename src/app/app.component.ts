import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalPagamentoListagemCartoesComponent } from './components/modal/modal-pagamento-listagem-cartoes/modal-pagamento-listagem-cartoes.component';
import { GeneralService } from './services/general-service.service';

interface Usuarios {
  id: number;
  name: string;
  img: string;
  username: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Desafio Picpay Front-end';

  usuarios: Array<Usuarios>;

  cards = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  constructor(
    public dialog: MatDialog,
    private _generalService: GeneralService
  ) {

  }

  ngOnInit() {
    this._generalService.buscarUsuarios().subscribe(el => {
      this.usuarios = el;
    })
  }

  openModalPagamentoListagemCartoes(event): void {
    this.dialog.open(ModalPagamentoListagemCartoesComponent, {
      data: { name: event, cards: this.cards }
    });
  }
}
