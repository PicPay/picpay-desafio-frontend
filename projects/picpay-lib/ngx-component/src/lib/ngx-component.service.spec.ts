import { TestBed } from '@angular/core/testing';

import { NgxComponentService } from './ngx-component.service';

describe('NgxComponentService', () => {
  let service: NgxComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
