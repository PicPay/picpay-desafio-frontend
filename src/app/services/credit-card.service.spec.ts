import { TestBed } from '@angular/core/testing';

import { CreditCardService } from './credit-card.service';

describe('CreditCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditCardService = TestBed.get(CreditCardService);
    expect(service).toBeTruthy();
  });
});
