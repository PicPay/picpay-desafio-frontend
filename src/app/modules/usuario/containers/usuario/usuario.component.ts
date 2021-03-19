import { Component, Input, OnInit } from "@angular/core";
import { userInfo } from "os";
import { Observable } from "rxjs";
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
    
    payload = new TransactionPayload();

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

    onSelecionarCartao(cardNumber): void {
        debugger
        const payload = this.payload;
        this.payload = {
            ...payload,
            ...this.cards.find(x => x.card_number === cardNumber)
        }
    }

    onEfetuarPagamento(): void {
        console.log('efetuar pagamento', this.payload);
    }

    onOpenModal(): void {
        this.showModal = true;
    }

    onCloseModal(): void {
        this.showModal = false;
    }
}