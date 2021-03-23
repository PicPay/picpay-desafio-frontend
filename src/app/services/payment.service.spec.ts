import { TestBed } from '@angular/core/testing';

import { PaymentBoxService } from './payment.service';

describe('PaymentBoxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentBoxService = TestBed.get(PaymentBoxService);
    expect(service).toBeTruthy();
  });
});
