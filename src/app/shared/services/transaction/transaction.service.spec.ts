import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TransactionService } from './transaction.service';

xdescribe('TransactionService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: TransactionService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }],
    });

    service = TestBed.get(TransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
