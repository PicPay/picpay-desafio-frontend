import { TestBed } from '@angular/core/testing';

import { TransactionsService } from './transactions.service';
import { HttpClientModule } from '@angular/common/http';

describe('TransactionsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }),
  );

  it('should be created', () => {
    const service: TransactionsService = TestBed.get(TransactionsService);
    expect(service).toBeTruthy();
  });
});
