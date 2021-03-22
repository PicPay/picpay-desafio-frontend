import { Component, ElementRef, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { fromEvent, merge, Observable } from "rxjs";
import { finalize } from "rxjs/operators";

import { Cartao } from "../../models/cartao.model";
import { DisplayMessage, GenericValidator, ValidationMessages } from "../../models/generico/generic-form-validation";
import { Pagamento } from "../../models/pagamento.model";
import { PagamentoResponse } from "../../models/response/pagamento-response.model";
import { UsuarioResponse } from "../../models/response/usuario-response.model";
import { CartaoService } from "../../services/cartao.service";
import { PagamentoService } from "../../services/pagamento.service";
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
    pagamentoResponse: PagamentoResponse; 
    usuarios$: Observable<Array<UsuarioResponse>>;
    cartoes: Array<any>;
    
    formulario: FormGroup;
    validationMessages: ValidationMessages;
    genericValidator: GenericValidator;
    displayMessage: DisplayMessage = {};

    constructor(
        private usuarioService: UsuarioService, 
        private cartaoService: CartaoService,
        private pagamentoService: PagamentoService,
        private formBuilder: FormBuilder) {
        this.validationMessages = {
            value: {
              required: 'Informe um valor para pagamento'
            },
            card_number: {
              required: 'Informe o um cartão'
            }
        }

        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    ngOnInit(): void {
        this.usuarios$ = this.usuarioService.obterUsuarios();
        this.iniciarValidacaoFormulario();
    }

    carregarEventoValidacao(formInputElements: any): void {
        let controlBlurs: Observable<any>[] = formInputElements
        .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
    
        merge(...controlBlurs).subscribe(() => this.displayMessage = this.genericValidator.processarMensagens(this.formulario));
    }

    onPagarUsuario(usuario: UsuarioResponse): void {
        this.pagamento.destination_user_id = usuario.id;
        this.nomeUsuario = usuario.username;
        this.onAbrirModal();
    }

    onSelecionarCartao(numeroCartao: string): void {
        const pagamento = this.pagamento;
        this.pagamento = {
            ...pagamento,
            ...this.obterCartaoPorNumero(numeroCartao)
        }
    }

    onEfetuarPagamento(): void {
        if (!this.formulario.dirty || !this.formulario.valid)
            return;

        this.pagamentoService.pagarUsuario(this.pagamento)
            .pipe(finalize(() => {
                this.onFecharModal();
                this.abrirNotificacao = true;
            }))
            .subscribe((pagamentoResponse: PagamentoResponse) => {
                this.pagamentoResponse = {
                    ...pagamentoResponse,
                    emoji: this.verificaEmoji(pagamentoResponse.status)
                }
            })
    }

    onAbrirModal(): void {
        this.displayMessage = {} as DisplayMessage;
        this.obterListaDeCartoes();
        this.abrirModal = true;
    }

    onFecharModal(): void {
        this.abrirModal = false;
        this.pagamento = new Pagamento();
    }

    onFecharNotificacao(): void {
        this.abrirNotificacao = false;
    }

    obterListaDeCartoes(): void {
        this.cartaoService.obterCartoesUsuario()
            .subscribe((cartoes: Array<Cartao>) => this.cartoes = cartoes);
    }

    private obterCartaoPorNumero(numeroCartao: string): Cartao {
        return this.cartoes.find(x => x.card_number === numeroCartao);
    }

    private verificaEmoji(status: string): string {
        return status === 'Aprovada' ? 'feliz' : 'triste';
    }

    private iniciarValidacaoFormulario(): void {
        this.formulario = this.formBuilder.group({
            value: ['', [ Validators.required ]],
            card_number: ['', [ Validators.required ]],
        });
    }
}