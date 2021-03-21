import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Transaction } from '../../models/transaction'


@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  constructor(private http: HttpClient) { }
  private url = "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989";

  realizeTransaction(transacao : Transaction[]) {
    return  this.http.post(this.url, transacao);
  }
}

