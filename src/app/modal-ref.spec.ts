import { TestBed } from '@angular/core/testing';

import { ModalRef } from './modal-ref';

describe('ModalRef', () => {

  const mockModalRef = { close: () => false };

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: ModalRef,
        useValue: mockModalRef,
      },
    ],
  }));

  it('should be created', () => {
    const service: ModalRef = TestBed.get(ModalRef);
    expect(service).toBeTruthy();
  });
});
