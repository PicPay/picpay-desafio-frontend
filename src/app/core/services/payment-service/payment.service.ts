import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import Payment from '../../../shared/models/payment/payment.model'

import PaymentData from './payment.data';
import PaymentStatus from 'src/app/shared/models/payment/payment-status.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  data: PaymentData
  
  private readonly domain: string = "/v3"
  constructor(private apiService: ApiService) { 
    this.data = new PaymentData()
  }

  async pay(paymentRequest: Payment): Promise<void>{
    let paymentStatus = await this.apiService.post<PaymentStatus>(`${this.domain}/533cd5d7-63d3-4488-bf8d-4bb8c751c989`, paymentRequest)
    this.data.paymentStatus = paymentStatus
  }


}
