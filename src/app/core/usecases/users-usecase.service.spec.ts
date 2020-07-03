import { TestBed } from '@angular/core/testing';

import { UsersUsecaseService } from './users-usecase.service';

describe('UsersUsecaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersUsecaseService = TestBed.get(UsersUsecaseService);
    expect(service).toBeTruthy();
  });
});
