import { TestBed } from '@angular/core/testing';

import { UserUsecaseService } from './user-usecase.service';

describe('UserUsecaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserUsecaseService = TestBed.get(UserUsecaseService);
    expect(service).toBeTruthy();
  });
});
