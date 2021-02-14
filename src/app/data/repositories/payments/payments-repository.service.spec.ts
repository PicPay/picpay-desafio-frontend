import { TestBed } from '@angular/core/testing';

import { PaymentsRepositoryService } from './payments-repository.service';

describe('PaymentsRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentsRepositoryService = TestBed.get(PaymentsRepositoryService);
    expect(service).toBeTruthy();
  });
});
