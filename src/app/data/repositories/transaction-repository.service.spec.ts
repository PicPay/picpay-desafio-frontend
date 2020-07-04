import { TestBed } from '@angular/core/testing';

import { TransactionRepositoryService } from './transaction-repository.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TransactionPayloadEntity } from 'src/app/core/entities/transaction-payload-entity';
import { environment } from 'src/environments/environment';

describe('TransactionRepositoryService', () => {
  let service: TransactionRepositoryService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.get(TransactionRepositoryService);
    backend = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should transaction', () => {
    const param = new TransactionPayloadEntity();

    service.transaction(param).subscribe(() => {});

    const req = backend.expectOne(environment.serverUrl + 'v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989');

    expect(req.request.method).toBe('POST');

    backend.verify();
  });
});
