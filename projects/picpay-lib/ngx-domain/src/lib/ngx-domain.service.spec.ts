import { TestBed } from '@angular/core/testing';

import { NgxDomainService } from './ngx-domain.service';

describe('NgxDomainService', () => {
  let service: NgxDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
