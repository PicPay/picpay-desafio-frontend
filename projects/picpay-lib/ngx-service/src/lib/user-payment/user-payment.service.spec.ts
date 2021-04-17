import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserPaymentApi } from '@picpay-lib/ngx-api';
import {
  PaymentTransaction,
  paymentTransactionMock,
  successPaymentTransactionResultMock,
  userOneMock,
  validCreditCardMock,
} from '@picpay-lib/ngx-domain';
import { of } from 'rxjs';

import { UserPaymentService } from './user-payment.service';

describe('UserPaymentService', () => {
  let service: UserPaymentService;
  let userPaymentApi: UserPaymentApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserPaymentService);
    userPaymentApi = TestBed.inject(UserPaymentApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send money to user one with a valid credit card', (done) => {
    const spy = spyOn(userPaymentApi, 'post').and.returnValue(of(successPaymentTransactionResultMock));

    service.sendMoneyToUser(userOneMock, validCreditCardMock, 10).subscribe((result) => {
      expect(result.success).toBeTruthy();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(new PaymentTransaction(paymentTransactionMock));
      done();
    });
  });
});
