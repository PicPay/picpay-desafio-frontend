import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-usuario-pagamento',
    templateUrl: './usuario-pagamento.component.html',
    styleUrls: ['./usuario-pagamento.component.scss']
})
export class UsuarioPagamentoComponent {

    @Input() userName: string = 'Nome do Usuário';
    @Input() cards: Array<any>;

    constructor() {}

}