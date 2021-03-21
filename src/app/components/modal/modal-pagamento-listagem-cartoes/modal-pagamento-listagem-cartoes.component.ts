import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GeneralService } from 'src/app/services/general-service.service';
import { Cartao } from '../../models/cartao';
import { TransacaoPagamento } from '../../models/transacao-pagamento';
import { ModalReciboPagamentoComponent } from '../modal-recibo-pagamento/modal-recibo-pagamento.component';

interface Cartoes {
  card_number: string
}

interface PagamentoResponse {
  success: boolean;
  status: string;
}

@Component({
  selector: 'app-modal-pagamento-listagem-cartoes',
  templateUrl: './modal-pagamento-listagem-cartoes.component.html',
  styleUrls: ['./modal-pagamento-listagem-cartoes.component.scss']
})
export class ModalPagamentoListagemCartoesComponent implements OnInit {

  nomeUsuario: string;
  idUsuario: number;
  cartoes: Array<Cartoes>;
  respostaPagamento: PagamentoResponse;
  transacaoPagamento: TransacaoPagamento;
  cartaoSelecionado: Cartao;

  @ViewChild('valorPagamento', { static: false }) valorPagamento: ElementRef;

  constructor(
    public dialog: MatDialog,
    public dialogModalPagamentoListagemCartoes: MatDialogRef<ModalPagamentoListagemCartoesComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private _generalService: GeneralService
  ) {
    this.nomeUsuario = data.usuario.nomeUsuario;
    this.idUsuario = data.usuario.idUsuario;
    this.cartoes = data.cards.map(element => ({
      value: element,
      viewValue: element.card_number
    }));
  }

  ngOnInit() {
  }

  fechar(): void {
    this.dialogModalPagamentoListagemCartoes.close();
  }

  valorSelecionado(event) {
    this.cartaoSelecionado = event.value;
  }

  pagar(event) {
    if(this.cartaoSelecionado && this.valorPagamento.nativeElement.value != ""){
      this.transacaoPagamento = new TransacaoPagamento(
        this.cartaoSelecionado.card_number,
        this.cartaoSelecionado.cvv,
        this.cartaoSelecionado.expiry_date,
        this.idUsuario,
        this.valorPagamento.nativeElement.value
      );
      this._generalService.fazerPagamento(this.transacaoPagamento).subscribe(el => {
        this.respostaPagamento = el;
        this.dialog.open(ModalReciboPagamentoComponent, {
          data: { tipoTransacao: this.validarCartao(this.cartaoSelecionado.card_number) ? false : this.respostaPagamento.success }
        });
      })
    }
  }

  validarCartao(numeroCartao: string) {
    return numeroCartao === '4111111111111234';
  }

}
