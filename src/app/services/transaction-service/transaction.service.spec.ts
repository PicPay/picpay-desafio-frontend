import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { UsersService } from '../users-service/users.service';
import { TransactionService } from './transaction.service';


describe('TransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
    providers: [
      TransactionService
    ]
  }));

  it('should be created', () => {
    const service: TransactionService = TestBed.get(TransactionService);
    expect(service).toBeTruthy();
  });
});
