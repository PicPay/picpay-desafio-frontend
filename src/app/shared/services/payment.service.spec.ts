import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { request } from 'http';

import { PaymentService } from './payment.service';

// valid payment
const requestPayment = {
  card_number: "1111111111111111",
  cvv: 789,
  destination_user_id: 1001,
  expiry_date: "01/18",
  value: 0.01
}

describe('PaymentService', () => {
  let service: PaymentService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(PaymentService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be make a successful payment', (done) => {
    const response = { status: 'Aprovada', success: true };

    service.save(requestPayment).subscribe(
      response => {
        expect(response).toEqual(expectedResponse, 'expected success payment');
        done();
      },
      done.fail
    );

    const req = httpTestingController.expectOne(service.TRANSACTION_URL);
    const expectedResponse = { status: 200, body: response };
    req.flush(expectedResponse);
  })
});


