import { TestBed } from '@angular/core/testing';

import { UserPaymentService } from './payload/payload.service';

describe('UserPaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserPaymentService = TestBed.get(UserPaymentService);
    expect(service).toBeTruthy();
  });
});
