import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { User } from '../../models/user.model';

import { UserService } from './user.service';

describe('UserService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let userService: UserService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }],
    });
    userService = TestBed.get(UserService);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('#getUsers should return an Observable of the Users from the response', () => {
    const users: User[] = [
      { id: 1, name: 'User1', img: 'user1.png', username: 'user1' },
      { id: 2, name: 'User2', img: 'user2.png', username: 'user2' },
    ];

    httpClientSpy.get.and.returnValue(of(users));

    userService
      .getUsers()
      .subscribe(
        (heroes) => expect(heroes).toEqual(users, 'expected users'),
        fail
      );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('#getUsers should return an Observable with an empty array when the server returns an error', async(() => {
    const errorResponse = new HttpErrorResponse({});

    httpClientSpy.get.and.returnValue(throwError(errorResponse));

    userService.getUsers().subscribe((users) => {
      console.log('in test', users);
      expect(users).toEqual([], 'empty');
    });

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  }));
});
