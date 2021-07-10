import { TestBed } from '@angular/core/testing';

import { TransactionUsecaseService } from './transaction-usecase.service';

describe('TransactionUsecaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionUsecaseService = TestBed.get(TransactionUsecaseService);
    expect(service).toBeTruthy();
  });
});
