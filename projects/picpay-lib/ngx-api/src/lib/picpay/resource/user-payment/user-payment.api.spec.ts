import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { IUserApiModel } from '../../model';
import { UserPaymentApi } from './user-payment.api';
import { paymentTransactionMock, successPaymentTransactionResultMock } from '@picpay-lib/ngx-domain';

describe('UserPaymentApi', () => {
  let service: UserPaymentApi;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserPaymentApi);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(
    'should send a payment to a user',
    waitForAsync(() => {
      service.post(paymentTransactionMock).subscribe((result) => {
        expect(result.status).toEqual(successPaymentTransactionResultMock.status);
        expect(result.success).toEqual(successPaymentTransactionResultMock.success);
      });

      const url = 'v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';
      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toEqual('POST');

      req.flush(successPaymentTransactionResultMock);
    })
  );
});
