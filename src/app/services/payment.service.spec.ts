import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TransactionPayload } from '../models/transaction-payload.interface';
import { TransactionResponse } from '../models/transaction-response.interface';

import { PaymentService } from './payment.service';

describe('PaymentService', () => {
  let service: PaymentService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PaymentService,
      ],
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.get(PaymentService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test payment user approved', () => {
    const baseApiUrl = 'https://run.mocky.io';
    const MOCK_PAYMENT_RESPONSE: TransactionResponse = {
      success: true,
      status: 'Aprovada'
    };

    const payload: TransactionPayload = {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
      destination_user_id: 1001,
      value: 20.5,
    };

    service.payUser(payload).subscribe((paymentResponse: TransactionResponse) => {
      expect(paymentResponse.status).toEqual('Aprovada');
      expect(paymentResponse.success).toEqual(true);
    });

    const req = httpMock.expectOne(`${baseApiUrl}/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989`);
    expect(req.request.method).toEqual('POST');

    req.flush(MOCK_PAYMENT_RESPONSE);

    httpMock.verify();
  });

  it('should test payment user reproved', () => {
    const baseApiUrl = 'https://run.mocky.io';
    const MOCK_PAYMENT_RESPONSE: TransactionResponse = {
      success: false,
      status: 'Reprovada'
    };

    const payload: TransactionPayload = {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
      destination_user_id: 1002,
      value: 123.5,
    };

    service.payUser(payload).subscribe((paymentResponse: TransactionResponse) => {
      expect(paymentResponse.status).toEqual('Reprovada');
      expect(paymentResponse.success).toEqual(false);
    });

    const req = httpMock.expectOne(`${baseApiUrl}/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989`);
    expect(req.request.method).toEqual('POST');

    req.flush(MOCK_PAYMENT_RESPONSE);

    httpMock.verify();
  });
});
