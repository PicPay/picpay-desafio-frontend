import { Overlay } from '@angular/cdk/overlay';
import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Overlay,
    ]
  }));

  it('should be created', () => {
    const service: ModalService = TestBed.get(ModalService);
    expect(service).toBeTruthy();
  });
});
