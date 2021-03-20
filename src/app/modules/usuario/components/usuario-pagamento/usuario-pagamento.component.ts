import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Cartao } from "../../models/cartao.model";
import { Pagamento } from "../../models/pagamento.model";

@Component({
    selector: 'app-usuario-pagamento',
    templateUrl: './usuario-pagamento.component.html',
    styleUrls: ['./usuario-pagamento.component.scss']
})
export class UsuarioPagamentoComponent {

    @Input() nomeUsuario: string;
    @Input() cartoes: Array<Cartao>;
    @Input() pagamento: Pagamento;

    @Output() fecharModal = new EventEmitter<void>();
    @Output() efetuarPagamento = new EventEmitter<void>();
    @Output() selecionarCartao = new EventEmitter<number>();

    constructor() {}

    onFecharModal(): void {
        this.fecharModal.emit();
    }

    onEfetuarPagamento() {
        this.efetuarPagamento.emit();
    }

    onSelecionarCartao(cardNumber: number) {
        this.selecionarCartao.emit(cardNumber);
    }
}