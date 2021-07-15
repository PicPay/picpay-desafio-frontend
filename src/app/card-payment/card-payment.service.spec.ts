import { TestBed } from '@angular/core/testing';

import { CardPaymentService } from './card-payment.service';

describe('CardPaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardPaymentService = TestBed.get(CardPaymentService);
    expect(service).toBeTruthy();
  });
});
