import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from 'rxjs/operators';

import { CARDS_MOCK } from './cards.mock';
import { UsuarioResponse } from "../models/usuario-response.model";

@Injectable()
export class UsuarioService {

    constructor(private http: HttpClient) {}

    obterUsuarios(): Observable<Array<UsuarioResponse>> {
        return this.http.get<Array<UsuarioResponse>>('https://www.mocky.io/v2/5d531c4f2e0000620081ddce');
    }

    obterCartoesUsuario(): Observable<any> {
        return of(CARDS_MOCK).pipe(delay(500))
    }

}