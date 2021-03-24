import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PaymentModel } from '../models/payment-model';

import { PaymentService } from './payment.service';

describe('PaymentService', () => {
  let service: PaymentService;
  let httpClient: HttpClient;
  let payment: PaymentModel;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: 'PAYMENT_URL', useValue: 'www.fake.com'}
      ]
    });
    
    service = TestBed.get(PaymentService);
    httpClient = TestBed.get(HttpClient);
    payment = {
      cardNumber: '1111111111111111',
      cvv: 789,
      expiryDate: '01/18',
      destinationUserId: 1005,
      value: 123
    }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('pay$', () => {
    it('should call HttpClient with the correct url and data', () => {
      const fakeUrl = TestBed.get('PAYMENT_URL');
      spyOn(httpClient, 'post');
      
      service.pay$(payment);

      expect(httpClient.post).toHaveBeenCalledWith(fakeUrl, payment);
    });
    
    it('should return status and success info', () => {
      const result = {
        success: true,
        status: 'Aprovado'
      };
      spyOn(httpClient, 'post').and.returnValue(of(result));
      
      const spy = jasmine.createSpy('spy');
      service.pay$(payment).subscribe(spy);

      expect(spy).toHaveBeenCalledWith(result);
    });
  });
});
