import { TestBed } from '@angular/core/testing';

import { ModalPaymentService } from './modal-payment.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalPaymentService = TestBed.get(ModalPaymentService);
    expect(service).toBeTruthy();
  });
});
