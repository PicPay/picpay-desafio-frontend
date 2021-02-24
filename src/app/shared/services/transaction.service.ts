import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    constructor(
        private http: HttpClient) {}

    private readonly API_URL: string = "https://run.mocky.io/v3/";

    public payUser(recipientUserId: number, value: number): Observable<TransactionPayload> {
        const apiUrl = `${this.API_URL}533cd5d7-63d3-4488-bf8d-4bb8c751c989`;

        console.log(`[Payment] Recipient ID: ${recipientUserId}. Value: R$ ${value.toFixed(2)}`);

        return this.http.post<TransactionPayload>(apiUrl, null);
    }
}