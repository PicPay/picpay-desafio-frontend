import { HttpClientModule } from '@angular/common/http';
import { async, inject, TestBed } from '@angular/core/testing';
import { User } from '@app/models/user/user.model';
import { Observable } from 'rxjs';

import { UserService } from '@services/user/user.service';

describe('UserService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should not return null on getUsers()', inject([UserService], (userService: UserService) => {
    const result: Observable<User[]> = userService.getUsers();
    expect(result).not.toBeNull();
  }));

});
