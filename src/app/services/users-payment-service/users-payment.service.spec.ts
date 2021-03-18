import { TestBed } from '@angular/core/testing';

import { UsersPaymentService } from './users-payment.service';

describe('UsersPaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersPaymentService = TestBed.get(UsersPaymentService);
    expect(service).toBeTruthy();
  });
});
