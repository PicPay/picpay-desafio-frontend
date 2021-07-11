import { TestBed } from '@angular/core/testing';

import { CardHandlerService } from './card-handler.service';

describe('CardHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardHandlerService = TestBed.get(CardHandlerService);
    expect(service).toBeTruthy();
  });
});
