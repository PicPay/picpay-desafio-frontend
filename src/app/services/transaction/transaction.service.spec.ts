import { TestBed } from '@angular/core/testing';
import { TransactionService } from './transaction.service';
import { HttpClientModule } from '@angular/common/http';

describe('TransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule], 
    providers: [TransactionService, HttpClientModule]
  }));

  it('should be created', () => {
    const service: TransactionService = TestBed.get(TransactionService);
    expect(service).toBeTruthy();
  });
});
