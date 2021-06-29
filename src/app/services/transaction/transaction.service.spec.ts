import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';

import { TransactionService } from '@services/transaction/transaction.service';

describe('TransactionService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: TransactionService = TestBed.get(TransactionService);
    expect(service).toBeTruthy();
  });
});
