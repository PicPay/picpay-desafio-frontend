import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Transaction, TransactionPayload } from './interfaces/transaction.interface';

import { ModalPaymentService } from './modal-payment.service';

const mockResult = {
  apiUrl: "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",
  data: {
    success: true,
    status: "Aprovada"
  }
}

describe('ModalPaymentService', () => {
  let service: ModalPaymentService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ModalPaymentService]
    })

    service = TestBed.get(ModalPaymentService);
    httpController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be send http POST in API and return result transaction', () => {
    const dataTransaction: Transaction = {
      destination_user_id: 1,
      card_number: "111111111111", 
      cvv: 123, 
      expiry_date: '12/2022', 
      value: 199
    };
    service.createTransaction(dataTransaction).subscribe(
      data => {
        expect(data.status).toEqual("Aprovada")
        expect(data.success).toBe(true)
      }
    )
    httpController.expectOne(mockResult.apiUrl).flush(mockResult.data);
  });

});
