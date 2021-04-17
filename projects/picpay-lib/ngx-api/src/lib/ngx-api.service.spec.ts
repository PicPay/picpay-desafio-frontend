import { TestBed } from '@angular/core/testing';

import { NgxApiService } from './ngx-api.service';

describe('NgxApiService', () => {
  let service: NgxApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
