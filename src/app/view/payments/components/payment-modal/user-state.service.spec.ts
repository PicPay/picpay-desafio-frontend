import { TestBed } from '@angular/core/testing';

import { UserStateService } from './user-state.service';

describe('UserStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserStateService = TestBed.get(UserStateService);
    expect(service).toBeTruthy();
  });
});
