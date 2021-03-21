import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

interface PagamentoResponse {
  success: boolean;
  status: string;
}

interface UserResponse {
  id: number;
  name: string;
  img: string;
  username: string;
}

@Injectable()
export class GeneralService {

    private readonly API = "https://run.mocky.io";
    constructor(private http: HttpClient) {}

    buscarUsuarios(): Observable<Array<UserResponse>>{
        return this.http.get<UserResponse[]>(`${this.API}/v2/5d531c4f2e0000620081ddce`);
    }

    fazerPagamento(): Observable<PagamentoResponse> {
        return this.http.post<PagamentoResponse>(`${this.API}/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989`, null);
    }
}