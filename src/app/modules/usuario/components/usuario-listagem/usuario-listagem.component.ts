import { Component, EventEmitter, Input, Output } from "@angular/core";

import { UsuarioResponse } from "../../models/response/usuario-response.model";

@Component({
    selector: 'app-usuario-listagem',
    templateUrl: './usuario-listagem.component.html',
    styleUrls: ['./usuario-listagem.component.scss']
})
export class UsuarioListagemComponent {

    @Input() usuarios: Array<UsuarioResponse>;
    
    @Output() abrirModal = new EventEmitter<void>();
    @Output() pagarUsuario = new EventEmitter<UsuarioResponse>();

    constructor() {}

    onPagarUsuario(usuario: UsuarioResponse): void {
        this.pagarUsuario.emit(usuario);
        this.abrirModal.emit();
    }
}