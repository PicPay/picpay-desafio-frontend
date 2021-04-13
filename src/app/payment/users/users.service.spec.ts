import { inject, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let usersService = UsersService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpModule],
    providers: [UsersService]
  }));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });

  it('should be listed users', inject([UsersService], async (usersService) => {
    const result = await usersService.getUsers()
    expect(result).not.toBeNull()
  })
  )
});
