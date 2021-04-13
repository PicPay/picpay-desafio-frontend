import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TransactionService } from './transaction.service';

describe('TransactionsService', () => {
  let service: TransactionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    service = TestBed.get(TransactionService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

  it('deve realizar a transação', fakeAsync(() => {
    const fakeTransaction = {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
      destination_user_id: 1001,
      value: 10
    }

    const fakeBody = {
      "success": true,
      "status": "Aprovada"
    }

    service.payment({...fakeTransaction}).subscribe(response => {
      expect(response).toEqual(fakeBody);
    });

    const request = httpMock.expectOne((req) => {
      return req.method === "POST";
    });

    request.flush(fakeBody);

    tick();
  }));
});