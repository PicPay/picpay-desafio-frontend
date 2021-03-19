import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from 'rxjs/operators';

import { CARDS_MOCK } from './cards.mock';
import { UsuarioResponse } from "../models/usuario-response.model";
import { PayloadResponse } from '../models/payload-response.model';
import { TransactionPayload } from '../models/transaction-payload.model';

@Injectable()
export class UsuarioService {

    constructor(private http: HttpClient) {}

    obterUsuarios(): Observable<Array<UsuarioResponse>> {
        return this.http.get<Array<UsuarioResponse>>('https://www.mocky.io/v2/5d531c4f2e0000620081ddce');
    }

    obterCartoesUsuario(): Observable<any> {
        return of(CARDS_MOCK).pipe(delay(500))
    }

    pagarUsuario(transactionPayload: TransactionPayload): Observable<PayloadResponse> {
        return this.http.post<PayloadResponse>('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', transactionPayload);
    }

}