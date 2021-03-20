import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";

import { Cartao } from "../../models/cartao.model";
import { Pagamento } from "../../models/pagamento.model";
import { ResultadoPagamentoResponse } from "../../models/response/resultado-pagamento-response.model";
import { UsuarioResponse } from "../../models/response/usuario-response.model";
import { UsuarioService } from "../../services/usuario.service";

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

    abrirModal = false;
    abrirNotificacao = false;
    nomeUsuario: string;
    
    pagamento = new Pagamento();
    resultadoPagamentoResponse: ResultadoPagamentoResponse; 

    usuarios$: Observable<Array<UsuarioResponse>>;
    cartoes: Array<any>;

    constructor(private usuarioService: UsuarioService) {}
    
    ngOnInit(): void {
        this.usuarios$ = this.usuarioService.obterUsuarios();

        this.obterListaDeCartoes();
    }

    obterListaDeCartoes(): void {
        this.usuarioService.obterCartoesUsuario()
            .subscribe((cartoes: Array<Cartao>) => this.cartoes = cartoes);
    }

    onPagarUsuario(usuario: UsuarioResponse): void {
        this.pagamento.destination_user_id = usuario.id;
        this.nomeUsuario = usuario.username;
    }

    onSelecionarCartao(numeroCartao: string): void {
        this.pagamento = {
            ...this.pagamento,
            ...this.obterCartaoPorNumero(numeroCartao)
        }
    }

    onEfetuarPagamento(): void {
        this.usuarioService.pagarUsuario(this.pagamento)
            .pipe(finalize(() => {
                this.onFecharModal();
                this.abrirNotificacao = true;
            }))
            .subscribe((resultadoPagamento: ResultadoPagamentoResponse) => {
                this.resultadoPagamentoResponse = {
                    ...resultadoPagamento,
                    emoji: this.verificaEmoji(resultadoPagamento.status)
                }
            })
    }

    onAbrirModal(): void {
        this.pagamento = new Pagamento();
        this.abrirModal = true;
    }

    onFecharModal(): void {
        this.abrirModal = false;
    }

    onFecharNotificacao(): void {
        this.abrirNotificacao = false;
    }

    private obterCartaoPorNumero(numeroCartao: string): Cartao {
        return this.cartoes.find(x => x.card_number === numeroCartao);
    }

    private verificaEmoji(status: string): string {
        return status === 'Aprovada' ? 'feliz' : 'triste';
    }
}