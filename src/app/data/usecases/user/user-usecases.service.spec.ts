import { TestBed } from '@angular/core/testing';

import { UserUsecasesService } from './user-usecases.service';

describe('UserUsecasesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserUsecasesService = TestBed.get(UserUsecasesService);
    expect(service).toBeTruthy();
  });
});
