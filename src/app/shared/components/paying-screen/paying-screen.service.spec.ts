import { TestBed } from '@angular/core/testing';
import { PayingScreenService } from './paying-screen.service';

describe('PayingScreenService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [PayingScreenService],
    })
  );

  it('should be created', () => {
    const service: PayingScreenService = TestBed.get(PayingScreenService);
    expect(service).toBeTruthy();
  });
});
