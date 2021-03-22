import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {CreditCard} from '../../models/credit-card.model';
import {TransactionPayload} from '../../models/transaction-payload.model';
import {TransactionResponse} from '../../models/transaction-response.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private static URL =
    'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';

  /**
   * Mock credit cards
   */
  private static CARDS: CreditCard[] = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  constructor(private httpClient: HttpClient) {}

  private static isValidTransaction(payload: TransactionPayload) {
    if (!payload) { return false; }
    if (!payload.card_number) { return false; }
    if (!payload.cvv) { return false; }
    if (!payload.expiry_date) { return false; }
    if (!payload.destination_user_id) { return false; }
    if (!payload.value || payload.value <= 0) { return false; }
    return true;
  }

  /**
   * Get current user's Credit Cards
   */
  public getCards(): Observable<CreditCard[]> {
    return of(TransactionService.CARDS); // Mocking API Call
  }

  public doTransaction(payload: TransactionPayload): Observable<TransactionResponse> {
    if (!TransactionService.isValidTransaction(payload)) {
      return of({ success: false, status: 'Negada' });
    }

    return this.httpClient
      .post<TransactionResponse>(TransactionService.URL, payload)
      .pipe(
        map(() => ({
          success: payload.cvv === TransactionService.CARDS[0].cvv,
          status:
            payload.cvv === TransactionService.CARDS[0].cvv
              ? 'Aprovada'
              : 'Negada',
        }))
      );
  }
}
