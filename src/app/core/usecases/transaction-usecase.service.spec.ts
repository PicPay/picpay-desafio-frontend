import { TestBed } from '@angular/core/testing';

import { TransactionUsecaseService } from './transaction-usecase.service';
import { ITransactionRepository } from '../interface/repositories/itransaction-repository';
import { TransactionPayloadEntity } from '../entities/transaction-payload-entity';
import { of } from 'rxjs';
import { TransactionResponseEntity } from '../entities/transaction-response-entity';

describe('TransactionUsecaseService', () => {
  let service: TransactionUsecaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ITransactionRepository, useValue: {
          transaction() {
            return of(new TransactionResponseEntity());
          }
        } }
      ]
    });

    service = TestBed.get(TransactionUsecaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should transaction return true', () => {
    const param = new TransactionPayloadEntity();

    spyOn(service, 'validateCard').and.returnValue(true);
    spyOn(service, 'validateResponse').and.returnValue(true);

    service.transaction(param).subscribe(res => {
      expect(service.validateCard).toHaveBeenCalled();
      expect(service.validateResponse).toHaveBeenCalled();
      expect(res).toBeTruthy();
    });
  });

  it('should transaction return false', () => {
    const param = new TransactionPayloadEntity();

    spyOn(service, 'validateCard').and.returnValue(false);

    service.transaction(param);

    expect(service.validateCard).toHaveBeenCalled();
  });

  it('should validate Response false', () => {
    const res = {
      success: true,
      status: 'Reprovada'
    };

    expect(service.validateResponse(res)).toBeFalsy();
  });

  it('should validate Response true', () => {
    const res = {
      success: true,
      status: 'Aprovada'
    };

    expect(service.validateResponse(res)).toBeTruthy();
  });

  it('should validate card true', () => {
    const cardNumber = '1111111111111111';

    expect(service.validateCard(cardNumber)).toBeTruthy();
  });

  it('should validate false', () => {
    const cardNumber = '4111111111111234';

    expect(service.validateCard(cardNumber)).toBeFalsy();
  });
});
