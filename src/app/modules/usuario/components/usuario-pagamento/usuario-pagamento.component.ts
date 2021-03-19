import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-usuario-pagamento',
    templateUrl: './usuario-pagamento.component.html',
    styleUrls: ['./usuario-pagamento.component.scss']
})
export class UsuarioPagamentoComponent {

    @Input() userName: string = 'Nome do Usuário';
    @Input() cards: Array<any>;

    @Output() closeModal = new EventEmitter<void>();

    constructor() {}

    oncloseModal(): void {
        this.closeModal.emit();
    }
}