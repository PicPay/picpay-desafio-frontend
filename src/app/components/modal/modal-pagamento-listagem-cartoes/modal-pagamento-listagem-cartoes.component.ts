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
    // Recebe do cads usuário o nome e o id do usuário, para mostrar na modal de pagamento e listagem o 
    // nome do usuário e o id para passar pra transação de pagamento.
    this.nomeUsuario = data.usuario.nomeUsuario;
    this.idUsuario = data.usuario.idUsuario;
    // Recebe do cards usuário os dados cartões, para mostrar no dropDown da modal de pagamento e 
    // listagem de cartões. 
    this.cartoes = data.cards.map(element => ({
      value: element,
      viewValue: element.card_number
    }));
  }

  ngOnInit() {
  }

  fechar(): void {
    // Fecha a modal de pagamento e listagem de cartões.
    this.dialogModalPagamentoListagemCartoes.close();
  }

  valorSelecionado(event) {
    // Pega os dados do cartão selecionado.
    this.cartaoSelecionado = event.value;
  }

  pagar() {
    // Se tiver um cartão selecionado e um valor informando para pagar ao usuário, então realiza o 
    // pagamento.
    if (this.cartaoSelecionado && this.valorPagamento.nativeElement.value != "") {
      // Preenche os dados de transação de pagamento, passada no serviço de fazerPagamento.
      this.transacaoPagamento = new TransacaoPagamento(
        this.cartaoSelecionado.card_number,
        this.cartaoSelecionado.cvv,
        this.cartaoSelecionado.expiry_date,
        this.idUsuario,
        this.valorPagamento.nativeElement.value
      );
      // Realiza o pagamento pro usuário.
      this._generalService.fazerPagamento(this.transacaoPagamento).subscribe(element => {
        this.respostaPagamento = element;
        this.dialog.open(ModalReciboPagamentoComponent, {
          // De acordo com o cartão selecionado, restorna true ou false para apresentar a modal de recibo
          // correta. Se passou o cartão que é inválido, já retorna falso, se passou o cartão válido, usa
          // o retorno do servico de fazerPagamento.
          data: { tipoTransacao: this.validarCartao(this.cartaoSelecionado.card_number) ? false : this.respostaPagamento.success }
        });
      })
    }
  }

  validarCartao(numeroCartao: string) {
    return numeroCartao === '4111111111111234';
  }

}
