import { TestBed } from '@angular/core/testing';

import { AlertService } from './alert.service';
import { Ng2IzitoastService } from 'ng2-izitoast';

describe('AlertService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [Ng2IzitoastService],
    })
  );

  it('should be created', () => {
    const service: AlertService = TestBed.get(AlertService);
    expect(service).toBeTruthy();
  });
});
