import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalPagamentoListagemCartoesComponent } from './components/modal/modal-pagamento-listagem-cartoes/modal-pagamento-listagem-cartoes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Desafio Picpay Front-end';

  constructor(
    public dialog: MatDialog
  ) { }

  openModalPagamentoListagemCartoes(event): void {
    this.dialog.open(ModalPagamentoListagemCartoesComponent, {
      data: { name: event }
    });
  }
}
