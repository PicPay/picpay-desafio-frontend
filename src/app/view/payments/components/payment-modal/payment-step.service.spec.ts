import { TestBed } from '@angular/core/testing';

import { PaymentStepService } from './payment-step.service';

describe('PaymentStepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentStepService = TestBed.get(PaymentStepService);
    expect(service).toBeTruthy();
  });
});
