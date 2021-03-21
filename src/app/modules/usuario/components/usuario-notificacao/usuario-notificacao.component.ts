import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { ResultadoPagamentoResponse } from "../../models/response/resultado-pagamento-response.model";

@Component({
    selector: 'app-usuario-notificacao',
    templateUrl: './usuario-notificacao.component.html',
    styleUrls: ['./usuario-notificacao.component.scss']
})
export class UsuarioNotificacaoComponent {

    @Input() resultadoPagamentoResponse: ResultadoPagamentoResponse; 
    @Output() fecharNotificacao = new EventEmitter<void>();

    onFecharNotificacao(): void {
        this.fecharNotificacao.emit();
    }
}