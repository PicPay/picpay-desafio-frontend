import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-recibo-pagamento',
  templateUrl: './modal-recibo-pagamento.component.html',
  styleUrls: ['./modal-recibo-pagamento.component.scss']
})
export class ModalReciboPagamentoComponent implements OnInit {

  respostaPagamento: boolean;

  constructor(
    public dialogModalReciboPagamento: MatDialogRef<ModalReciboPagamentoComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.respostaPagamento = data.tipoTransacao;
    setTimeout(() => {
      this.dialogModalReciboPagamento.close();
    }, 3000);
  }

  ngOnInit() {
  }

}
