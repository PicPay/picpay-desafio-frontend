import { TestBed } from '@angular/core/testing';

import { PaymentService } from './payment.service';

describe('PaymentService', () => {
  let service: PaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(PaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
