import { TestBed } from '@angular/core/testing';
import { CreditCard } from '@picpay-lib/ngx-domain';

import { CreditCardService } from './credit-card.service';

describe('CreditCardService', () => {
  let service: CreditCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of two credit cards', (done) => {
    service.getList().subscribe((cardList: CreditCard[]) => {
      expect(cardList.length).toEqual(2);
      done();
    });
  });
});
