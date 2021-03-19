import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UsuarioResponse } from "../../models/usuario-response.model";
import { UsuarioService } from "../../services/usuario.service";

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

    showModal = false;

    users$: Observable<Array<UsuarioResponse>>;
    cards: Array<any>;


    constructor(private usuarioService: UsuarioService) {}
    
    ngOnInit(): void {
        this.users$ = this.usuarioService.obterUsuarios();

        this.obterListaDeCartoes();
    }

    obterListaDeCartoes(): void {
        this.usuarioService.obterCartoesUsuario()
            .subscribe(response => {
                this.cards = response;
            })
    }


    openModal(): void {
        this.showModal = true;
    }
}