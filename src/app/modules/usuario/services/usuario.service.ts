import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from 'rxjs/operators';

import { CARTOES_MOCK } from './cartoes.mock';
import { UsuarioResponse } from "../models/response/usuario-response.model";
import { ResultadoPagamentoResponse } from '../models/response/resultado-pagamento-response.model';
import { Pagamento } from '../models/pagamento.model';

@Injectable()
export class UsuarioService {

    constructor(private http: HttpClient) {}

    obterUsuarios(): Observable<Array<UsuarioResponse>> {
        return this.http.get<Array<UsuarioResponse>>('https://www.mocky.io/v2/5d531c4f2e0000620081ddce');
    }

    obterCartoesUsuario(): Observable<any> {
        return of(CARTOES_MOCK).pipe(delay(500))
    }

    pagarUsuario(pagamento: Pagamento): Observable<ResultadoPagamentoResponse> {
        return this.http.post<ResultadoPagamentoResponse>('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', pagamento);
    }

}