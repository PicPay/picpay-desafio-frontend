import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChildren } from "@angular/core";
import { FormControlName, FormGroup } from "@angular/forms";

import { Cartao } from "../../models/cartao.model";
import { DisplayMessage } from "../../models/generico/generic-form-validation";
import { Pagamento } from "../../models/pagamento.model";

@Component({
    selector: 'app-usuario-pagamento',
    templateUrl: './usuario-pagamento.component.html',
    styleUrls: ['./usuario-pagamento.component.scss']
})
export class UsuarioPagamentoComponent implements AfterViewInit {
    
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    @Input() nomeUsuario: string;
    @Input() cartoes: Array<Cartao>;
    @Input() pagamento: Pagamento;
    @Input() formulario: FormGroup;
    @Input() displayMessage: DisplayMessage;

    @Output() fecharModal = new EventEmitter<void>();
    @Output() efetuarPagamento = new EventEmitter<void>();
    @Output() selecionarCartao = new EventEmitter<number>();
    @Output() carregarEventoValidacao = new EventEmitter<any>();

    ngAfterViewInit(): void {
        this.carregarEventoValidacao.emit(this.formInputElements);
    }

    onFecharModal(): void {
        this.fecharModal.emit();
    }

    onEfetuarPagamento() {
        this.efetuarPagamento.emit();
    }

    onSelecionarCartao(numeroCartao: number) {
        this.selecionarCartao.emit(numeroCartao);
    }
}