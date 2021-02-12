import { TestBed } from '@angular/core/testing';

import { PaymentsUsecasesService } from './payments-usecases.service';

describe('PaymentsUsecasesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentsUsecasesService = TestBed.get(PaymentsUsecasesService);
    expect(service).toBeTruthy();
  });
});
