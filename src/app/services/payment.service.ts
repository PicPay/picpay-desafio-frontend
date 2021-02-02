import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { TransactionPayload } from "../models/TransactionPayload";

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  API_URL: string =
    "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989";

  constructor(private http: HttpClient) {}

  createTransaction(transaction: TransactionPayload): Observable<any> {
    return this.validateCard(transaction)
      .pipe(
        switchMap((isValid) => {
          if (isValid) {
            return this.http.post(this.API_URL, transaction);
          } else {
            throw throwError({ status: "Cartão inválido" });
          }
        }),

        catchError((err) => of({ success: false }))
      )

      .pipe();
  }

  private validateCard(transaction: TransactionPayload): Observable<boolean> {
    const INVALID_CARD = "4111111111111234";
    return of(transaction.card_number !== INVALID_CARD);
  }
}
