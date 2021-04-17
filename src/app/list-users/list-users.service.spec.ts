/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListUsersService } from './list-users.service';

describe('Service: ListUsers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListUsersService]
    });
  });

  it('should ...', inject([ListUsersService], (service: ListUsersService) => {
    expect(service).toBeTruthy();
  }));
});
