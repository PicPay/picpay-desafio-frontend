import { TestBed } from '@angular/core/testing';

import { UsersRepositoryService } from './users-repository.service';

describe('UsersRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersRepositoryService = TestBed.get(UsersRepositoryService);
    expect(service).toBeTruthy();
  });
});
