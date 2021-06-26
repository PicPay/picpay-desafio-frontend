import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiError } from 'src/models/ApiError';
import { Card } from 'src/models/Card';
import { TransactionPayload } from 'src/models/Transaction.payload';
import { User } from 'src/models/User';
import { URLS } from 'src/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  cards: Card[] = [
    // valid card
    {
      cardId: 1,
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      cardId: 2,
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  constructor(
    private http: HttpClient
  ) { }

  getTodosCartoes() {
    return this.cards.map(this.formataNumeroCartao)
  }

  realizarPagamento(valor: number, idCartao: number, usuario: User): Observable<any> {
    const card = this.cards.find(c => c.cardId == idCartao);
    if (!card) return throwError(new ApiError(false, 'Cartão não encontrado'))

    const request = new TransactionPayload().formatarParaApi(card, usuario, valor);
    return this.http.post(URLS.POST_REALIZAR_PAGAMENTO, request).pipe(
      tap((r) => {
        if (idCartao == 2) { // simulando erro de cartão inválido
          throw new ApiError(false, 'Cartão inválido!');
        }
      })
    );
  }
  
  private formataNumeroCartao(card: Card): Card { 
    const copy = Object.assign({}, card);
    copy.card_number = copy.card_number.substr(card.card_number.length - 4);
    return copy;
  }
}
