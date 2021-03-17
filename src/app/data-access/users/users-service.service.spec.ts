import { TestBed } from '@angular/core/testing';

import { UsersServiceService } from './users-service.service';

describe('UsersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersServiceService = TestBed.get(UsersServiceService);
    expect(service).toBeTruthy();
  });
});
