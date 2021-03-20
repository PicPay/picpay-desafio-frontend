import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-pagamento-listagem-cartoes',
  templateUrl: './modal-pagamento-listagem-cartoes.component.html',
  styleUrls: ['./modal-pagamento-listagem-cartoes.component.scss']
})
export class ModalPagamentoListagemCartoesComponent implements OnInit {

  nomeUsuario: string;

  constructor(
    public dialogModalPagamentoListagemCartoes: MatDialogRef<ModalPagamentoListagemCartoesComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.nomeUsuario = data.name;
  }

  ngOnInit() {
  }

  fechar(): void {
    this.dialogModalPagamentoListagemCartoes.close();
  }

}
