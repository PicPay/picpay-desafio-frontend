import { TestBed } from '@angular/core/testing';

import { TransactionControllerService } from './transaction-controller.service';

describe('TransactionControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionControllerService = TestBed.get(TransactionControllerService);
    expect(service).toBeTruthy();
  });
});
