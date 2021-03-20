import { Component, Input, OnInit } from "@angular/core";
import { userInfo } from "os";
import { Observable } from "rxjs";
import { PayloadResponse } from "../../models/payload-response.model";
import { TransactionPayload } from "../../models/transaction-payload.model";
import { UsuarioResponse } from "../../models/usuario-response.model";
import { UsuarioService } from "../../services/usuario.service";

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

    showModal = false;
    openNotificacao = false;
    
    payload = new TransactionPayload();

    payloadResponse: PayloadResponse; 

    users$: Observable<Array<UsuarioResponse>>;
    cards: Array<any>;

    constructor(private usuarioService: UsuarioService) {}
    
    ngOnInit(): void {
        this.users$ = this.usuarioService.obterUsuarios();

        this.obterListaDeCartoes();
    }

    obterListaDeCartoes(): void {
        this.usuarioService.obterCartoesUsuario()
            .subscribe(response => this.cards = response);
    }

    onPagarUsuario(userId: any) {
        this.payload.destination_user_id = userId;
    }

    onSelecionarCartao(cardNumber: any): void {
        const payload = this.payload;
        this.payload = {
            ...payload,
            ...this.cards.find(x => x.card_number === cardNumber)
        }
    }

    onEfetuarPagamento(): void {
        this.usuarioService.pagarUsuario(this.payload)
            .subscribe(response => {
                debugger
                this.payloadResponse = response;
                this.onCloseModal();
                this.openNotificacao = true;
            });
    }

    onOpenModal(): void {
        this.showModal = true;
    }

    onCloseModal(): void {
        this.showModal = false;
    }
}