import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  commitTransaction(payload: Transatcion) {
    return this.http.post<TransactionResponse>(
      `https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989`,
      payload
    );
  }
}
