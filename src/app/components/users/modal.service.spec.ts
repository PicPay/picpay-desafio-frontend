import { TestBed } from '@angular/core/testing';

import { ModalService } from './transaction.service';

describe('ModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalService = TestBed.get(ModalService);
    expect(service).toBeTruthy();
  });
});
