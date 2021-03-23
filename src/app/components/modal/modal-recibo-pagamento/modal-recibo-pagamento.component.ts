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
    // Recebe a reposta da transação de pagamento da modal de pagamento e listagem de cartões, se a 
    // resposta for true, chama a mensangem de sucesso no ngIf no HTML, se a resposta for false, chama a
    // mensagem de insucesso no ngIf no HTML.
    this.respostaPagamento = data.tipoTransacao;
    // Depois de 3 segundos, tela de recibo fecha automaticamente.
    setTimeout(() => {
      this.dialogModalReciboPagamento.close();
    }, 3000);
  }

  ngOnInit() {
  }

}
