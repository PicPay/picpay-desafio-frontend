import { Component, Input, Output, EventEmitter } from "@angular/core";
import { PagamentoResponse } from "../../models/response/pagamento-response.model";

@Component({
    selector: 'app-usuario-notificacao',
    templateUrl: './usuario-notificacao.component.html',
    styleUrls: ['./usuario-notificacao.component.scss']
})
export class UsuarioNotificacaoComponent {

    @Input() pagamentoResponse: PagamentoResponse; 
    @Output() fecharNotificacao = new EventEmitter<void>();

    onFecharNotificacao(): void {
        this.fecharNotificacao.emit();
    }
}