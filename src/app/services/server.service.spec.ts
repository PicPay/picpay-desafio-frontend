import { TestBed } from '@angular/core/testing';

import { ServerService } from './server.service';
import { HttpClientModule } from '@angular/common/http';

describe('ServerService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
  );

  it('should be created', () => {
    const service: ServerService = TestBed.get(ServerService);
    expect(service).toBeTruthy();
  });
});
