import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

const urlBase = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989'

interface TransactionPayload {
  // Card Info
  card_number: string
  cvv: number
  expiry_date: string

  // Destination User ID
  destination_user_id: number

  // Value of the Transaction
  value: number
}

@Injectable({
  providedIn: 'root'
})

export class PostPaymentService  {

  constructor (private httpClient: HttpClient) {}

  postPayment(body: object) {
    return this.httpClient.post<TransactionPayload>(`${urlBase}`, body)
  }

}