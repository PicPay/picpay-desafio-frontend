import { TestBed } from '@angular/core/testing';

import { UserRepositoryService } from './user-repository.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRepositoryService = TestBed.get(UserRepositoryService);
    expect(service).toBeTruthy();
  });
});
