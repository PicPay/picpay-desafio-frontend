import { Component, Input, EventEmitter, Output } from "@angular/core";
import { TransactionPayload } from "../../models/transaction-payload.model";

@Component({
    selector: 'app-usuario-pagamento',
    templateUrl: './usuario-pagamento.component.html',
    styleUrls: ['./usuario-pagamento.component.scss']
})
export class UsuarioPagamentoComponent {

    @Input() userName: string = 'Nome do Usuário';
    @Input() cards: Array<any>;
    @Input() payload: TransactionPayload;

    @Output() closeModal = new EventEmitter<void>();
    @Output() efetuarPagamento = new EventEmitter<void>();
    @Output() selecionarCartao = new EventEmitter<number>();

    constructor() {}

    oncloseModal(): void {
        this.closeModal.emit();
    }

    onefetuarPagamento() {
        this.efetuarPagamento.emit();
    }

    onselecionarCartao(cardNumber: number) {
        this.selecionarCartao.emit(cardNumber);
    }
}