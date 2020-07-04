import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersRepositoryService } from './users-repository.service';
import { environment } from '../../../environments/environment';

describe('UsersRepositoryService', () => {
  let service: UsersRepositoryService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.get(UsersRepositoryService);
    backend = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get', () => {
    service.get().subscribe(() => {});

    const req = backend.expectOne(environment.serverUrl + 'v2/5d531c4f2e0000620081ddce');

    expect(req.request.method).toBe('GET');

    backend.verify();
  });
});
