import { TestBed } from '@angular/core/testing';

import { TransactionRepositoryService } from './transaction-repository.service';

describe('TransactionRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionRepositoryService = TestBed.get(TransactionRepositoryService);
    expect(service).toBeTruthy();
  });
});
