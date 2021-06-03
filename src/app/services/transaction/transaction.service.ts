import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Transaction } from "src/app/models/transaction";

@Injectable({
  providedIn: "root",
})
export class TransactionService {
  private url = "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989";
  transaction: Transaction = new Transaction();
  constructor(private http: HttpClient) {}

  sendPayment(user, valor, card) {
    this.transaction.card_number = card.card_number;
    this.transaction.cvv = card.cvv;
    this.transaction.expiry_date = card.expiry_date;
    this.transaction.destination_user_id = user.id;
    this.transaction.value = valor.value;

    const body = JSON.stringify(this.transaction);
    return this.http.post(this.url, body);
  }
}
