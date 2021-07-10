import { TestBed } from '@angular/core/testing';

import { UserControllerService } from './user-controller.service';

describe('UserControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserControllerService = TestBed.get(UserControllerService);
    expect(service).toBeTruthy();
  });
});
