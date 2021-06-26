import { TestBed } from '@angular/core/testing';

import { NotificadorService } from './notificador.service';

describe('NotificadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificadorService = TestBed.get(NotificadorService);
    expect(service).toBeTruthy();
  });
});
