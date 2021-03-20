import { Component, Input } from "@angular/core";
import { PayloadResponse } from "../../models/payload-response.model";

@Component({
    selector: 'app-notifica-usuario',
    templateUrl: './notifica-usuario.component.html',
    styleUrls: ['./notifica-usuario.component.scss']
})
export class NotificaUsuarioComponent {

    @Input() payloadResponse: PayloadResponse; 
}