/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiHttpService } from './api-http.service';

describe('Service: ApiHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiHttpService]
    });
  });

  it('should ...', inject([ApiHttpService], (service: ApiHttpService) => {
    expect(service).toBeTruthy();
  }));
});
