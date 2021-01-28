import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import Payment from '../../../shared/models/payment/payment.model'

import PaymentData from './payment.data';
import PaymentStatus from 'src/app/shared/models/payment/payment-status.model';
import Card from 'src/app/shared/models/payment/card.model';

import { savedCardsMock } from '../../mocks/card.mock'
import User from 'src/app/shared/models/user/user.model';
import { UserService } from '../user-service/user.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  data: PaymentData
  dataAnnouncer: Subject<PaymentData>


  private readonly domain: string = "/v3"
  constructor(private apiService: ApiService) {
    this.data = new PaymentData()
    this.dataAnnouncer = new Subject<PaymentData>()
  }

  openPaymentModal(recipient: User) {
    this.data.selectedRecipient = recipient
    this.data.isDisplayingPaymentModal = true
    this.dataAnnouncer.next(this.data)
  }

  async pay(paymentRequest: Payment): Promise<void> {
    this.data.currentPayment = paymentRequest
    let paymentStatus = await this.apiService.post<PaymentStatus>(`${this.domain}/533cd5d7-63d3-4488-bf8d-4bb8c751c989`, paymentRequest)
    paymentStatus = this.mockPaymentError(paymentRequest, paymentStatus)
    this.data.paymentStatus = paymentStatus
  }

  async retrieveSavedCards(): Promise<void> {
    let savedCards = await new Promise<Array<Card>>(resolve => setTimeout(() => { resolve(savedCardsMock) }, 1500))
    this.data.savedCards = savedCards
  }

  mockPaymentError(payment: Payment, paymentStatus: PaymentStatus) : PaymentStatus{
    let finalPaymentStatus = paymentStatus
    if (payment.card_number === '4111111111111234') {
      finalPaymentStatus = new PaymentStatus(false, 'Reprovada')
    }

    return finalPaymentStatus

    //Poderia ser em uma única linha:
    //return payment.card_number === '4111111111111234'
  }


}
