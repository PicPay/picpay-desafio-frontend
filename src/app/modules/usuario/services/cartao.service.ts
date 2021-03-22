import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from 'rxjs/operators';

import { Cartao } from '../models/cartao.model';
import { CARTOES_MOCK } from './mocks/cartoes.mock';

@Injectable()
export class CartaoService {

    obterCartoesUsuario(): Observable<Array<Cartao>> {
        return of(CARTOES_MOCK).pipe(delay(500))
    }
}