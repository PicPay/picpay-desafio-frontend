import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getActiveModal$', () => {
    it('should return activeModal$', () => {
      expect(service.getActiveModal$()).toBe(service.activeModal$)
    })
  })
});
