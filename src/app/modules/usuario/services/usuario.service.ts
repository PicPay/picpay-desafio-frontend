import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { UsuarioResponse } from "../models/response/usuario-response.model";

@Injectable()
export class UsuarioService {

    constructor(private http: HttpClient) {}

    obterUsuarios(): Observable<Array<UsuarioResponse>> {
        return this.http.get<Array<UsuarioResponse>>('https://www.mocky.io/v2/5d531c4f2e0000620081ddce');
    }
}
