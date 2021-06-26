import { OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Card } from 'src/models/Card';
import { User } from 'src/models/User';
import { NotificadorService } from 'src/services/notificador.service';
import { PagamentoService } from 'src/services/pagamento.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent implements OnInit, OnChanges {
  @ViewChild(NgForm, { static: true }) form: NgForm;
  @Input() usuario: User;

  cartoes: Card[];
  loading = false;

  constructor(
    private pagamentoService: PagamentoService,
    private notificacaoService: NotificadorService
  ) { }

  ngOnInit() {
    this.cartoes = this.pagamentoService.getTodosCartoes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.usuario) {
      this.form.reset();
    }    
  }

  pagar(form: NgForm) {
    if (form.valid) {
      this.loading = true;
      this.pagamentoService.realizarPagamento(form.value.value, form.value.card, this.usuario).subscribe(response => {
        this.loading = false;
        this.notificacaoService.notificar('Recibo de pagamento', 'O pagamento foi concluído com sucesso!')
        console.log(response);
      }, error => {
        this.loading = false;
        this.notificacaoService.notificar('Recibo de pagamento', 'O pagamento <strong> não </strong> foi concluído com sucesso!')
        console.log(error);
      })
    }
  }

}
