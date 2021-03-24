import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

class FakeComponent {}

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
    });
  });

  describe('open', () => {
    it('should call activeModalSubject$.next passing argument Type', () => {
      spyOn(service.activeModalSubject$, 'next');

      service.open(FakeComponent, {});

      expect(service.activeModalSubject$.next).toHaveBeenCalledWith({ type: FakeComponent, data: {} })
    });
  });
});
