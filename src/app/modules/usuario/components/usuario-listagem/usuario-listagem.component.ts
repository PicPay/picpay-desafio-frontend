import { Component, Input, Output, EventEmitter } from "@angular/core";
import { UsuarioResponse } from "../../models/usuario-response.model";

@Component({
    selector: 'app-usuario-listagem',
    templateUrl: './usuario-listagem.component.html',
    styleUrls: ['./usuario-listagem.component.scss']
})
export class UsuarioListagemComponent {

    @Input() users: Array<UsuarioResponse>;
    
    @Output() showModal = new EventEmitter<void>();
    @Output() pagarUsuario = new EventEmitter<number>();

    constructor() {}

    onPagarUsuario(id: any): void {
        this.pagarUsuario.emit(id);
        this.showModal.emit();
    }
}