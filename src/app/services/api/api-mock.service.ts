import { Injectable } from '@angular/core';
import { IApi } from '../../interfaces/api.interface'
import { of } from 'rxjs';
import { ITransactionPayload } from 'src/app/interfaces/transactionPayload.interface';
import { ITransacao } from 'src/app/interfaces/transacao.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiMockService extends IApi {
  users = [{ "id": 1001, "name": "Eduardo Santos", "img": "https://randomuser.me/api/portraits/men/9.jpg", "username": "@eduardo.santos" }, { "id": 1002, "name": "Marina Coelho", "img": "https://randomuser.me/api/portraits/women/37.jpg", "username": "@marina.coelho" }, { "id": 1003, "name": "Márcia da Silva", "img": "https://randomuser.me/api/portraits/women/57.jpg", "username": "@marcia.silva" }, { "id": 1004, "name": "Fabrício Val", "img": "https://randomuser.me/api/portraits/men/98.jpg", "username": "@fabricio.val" }, { "id": 1005, "name": "Júlia Magalhães", "img": "https://randomuser.me/api/portraits/women/44.jpg", "username": "@julia.magalhaes" }, { "id": 1006, "name": "Luma Pereira", "img": "https://randomuser.me/api/portraits/women/13.jpg", "username": "@luma.pereira" }, { "id": 1007, "name": "Danilo Gonçalves", "img": "https://randomuser.me/api/portraits/men/55.jpg", "username": "@danilo.goncalves" }];
  getUsers() {
    return of(this.users);
  }
  postTransacao(transactionPayload:ITransactionPayload){
    const res:ITransacao = {
      "success": true,
      "status": "Aprovada"
    }
    return of(res)
  }
}
