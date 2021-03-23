import { TestBed } from '@angular/core/testing';

import { PayloadService } from '../../../services/payload.service';

describe('PayloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayloadService = TestBed.get(PayloadService);
    expect(service).toBeTruthy();
  });
});
