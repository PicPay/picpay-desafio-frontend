import { Component, Input, OnInit } from "@angular/core";
import { ResultadoPagamentoResponse } from "../../models/response/resultado-pagamento-response.model";

@Component({
    selector: 'app-usuario-notificacao',
    templateUrl: './usuario-notificacao.component.html',
    styleUrls: ['./usuario-notificacao.component.scss']
})
export class NotificaUsuarioComponent implements OnInit {

    emoji = 'feliz';

    @Input() resultadoPagamentoResponse: ResultadoPagamentoResponse; 

    ngOnInit(): void {

        this.verificaEmoji();
    }

    private verificaEmoji(): void {
        if (this.resultadoPagamentoResponse.status !== 'Aprovada')  
            this.emoji = 'triste';
    }
}