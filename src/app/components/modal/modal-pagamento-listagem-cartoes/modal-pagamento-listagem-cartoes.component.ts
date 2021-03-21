import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalReciboPagamentoComponent } from '../modal-recibo-pagamento/modal-recibo-pagamento.component';

interface cartoes {
  card_number: string
}

@Component({
  selector: 'app-modal-pagamento-listagem-cartoes',
  templateUrl: './modal-pagamento-listagem-cartoes.component.html',
  styleUrls: ['./modal-pagamento-listagem-cartoes.component.scss']
})
export class ModalPagamentoListagemCartoesComponent implements OnInit {

  nomeUsuario: string;
  cartoes: Array<cartoes>;

  constructor(
    public dialog: MatDialog,
    public dialogModalPagamentoListagemCartoes: MatDialogRef<ModalPagamentoListagemCartoesComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.nomeUsuario = data.name;
    this.cartoes = data.cards.map(element => ({
      value: element.card_number,
      viewValue: element.card_number
    }));
  }

  ngOnInit() {
  }

  fechar(): void {
    this.dialogModalPagamentoListagemCartoes.close();
  }

  pagar() {
    this.dialog.open(ModalReciboPagamentoComponent, {
      data: { tipoTransacao: true }
    });
  }

}
