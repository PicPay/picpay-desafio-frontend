import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from "@angular/core";
import { FormBuilder, FormControlName, FormGroup, Validators } from "@angular/forms";
import { fromEvent, merge, Observable } from "rxjs";
import { finalize } from "rxjs/operators";

import { Cartao } from "../../models/cartao.model";
import { DisplayMessage, GenericValidator, ValidationMessages } from "../../models/generico/generic-form-validation";
import { Pagamento } from "../../models/pagamento.model";
import { ResultadoPagamentoResponse } from "../../models/response/resultado-pagamento-response.model";
import { UsuarioResponse } from "../../models/response/usuario-response.model";
import { UsuarioService } from "../../services/usuario.service";
import mensagensValidacao from '../../services/validators/usuario-mensagens.validator';

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
    
    formulario: FormGroup;
    validationMessages: ValidationMessages;
    genericValidator: GenericValidator;
    displayMessage: DisplayMessage = {};

    constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder) {
        this.validationMessages = mensagensValidacao
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    ngOnInit(): void {
        this.usuarios$ = this.usuarioService.obterUsuarios();
        this.obterListaDeCartoes();
        this.iniciarValidacaoFormulario();
    }

    carregarEventoValidacao(formInputElements: any): void {
        let controlBlurs: Observable<any>[] = formInputElements
        .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
    
        merge(...controlBlurs).subscribe(() => this.displayMessage = this.genericValidator.processarMensagens(this.formulario));
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
        const pagamento = this.pagamento;
        this.pagamento = {
            ...pagamento,
            ...this.obterCartaoPorNumero(numeroCartao)
        }
    }

    onEfetuarPagamento(): void {
        if (!this.formulario.dirty || !this.formulario.valid)
            return;

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
        const userId = this.pagamento.destination_user_id;
        this.pagamento = { destination_user_id: userId }  as Pagamento;
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

    private iniciarValidacaoFormulario(): void {
        this.formulario = this.formBuilder.group({
            value: ['', [ Validators.required ]],
            card_number: ['', [ Validators.required ]],
        });
    }
}