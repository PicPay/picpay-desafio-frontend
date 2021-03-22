import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { PagamentoResponse } from '../models/response/pagamento-response.model';
import { Pagamento } from '../models/pagamento.model';

@Injectable()
export class PagamentoService {

    constructor(private http: HttpClient) {}

    pagarUsuario(pagamento: Pagamento): Observable<PagamentoResponse> {
        return this.http.post<PagamentoResponse>('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', pagamento);
    }
}
