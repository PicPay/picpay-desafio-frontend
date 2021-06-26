import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { TransactionPayload } from 'src/models/Transaction.payload';
import { User } from 'src/models/User';
import { URLS } from 'src/utils/constants';

import { PagamentoService } from './pagamento.service';

describe('PagamentoService', () => {
  let service: PagamentoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  
    service = TestBed.get(PagamentoService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Teste função de pagamento', () => {
    const payload = new TransactionPayload();
    payload.card_number = '111111111';
    payload.cvv = 123;
    payload.expiry_date = '10/21';
    payload.value = 10;
  
    it('Deve retornar erro caso cartão inválido', () => {
      service.realizarPagamento(1, 3, {id: 1} as User).subscribe({
        error: (err) => {
          expect(err.success).toBe(false);
        }
      })
    })

    it('Deve ser sucesso se os parâmetros estiverem válidos', fakeAsync(() => {
      service.realizarPagamento(10, 1, {id: 1} as User).subscribe(r => {
        expect(r.success).toBeTruthy();
      })
      httpTestingController.expectOne(URLS.POST_REALIZAR_PAGAMENTO).flush({success: true})
    }))
  })
});
