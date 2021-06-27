import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UsersService } from './users.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.get(UsersService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('Should be instantiated', () => {
    const userService: UsersService = TestBed.get(UsersService);
    expect(userService).toBeTruthy();
  });

  it('Should get users data', fakeAsync(() => {
    const fakeBody = [
      {
        id: 1001,
        name: 'Eduardo Santos',
        img: 'https://randomuser.me/api/portraits/men/9.jpg',
        username: '@eduardo.santos',
      },
    ];

    service.getUsers().subscribe((response) => {
      expect(response).toEqual(fakeBody);
    });

    const request = httpMock.expectOne((req) => {
      return req.method === 'GET';
    });

    request.flush(fakeBody);

    tick();
  }));
});
