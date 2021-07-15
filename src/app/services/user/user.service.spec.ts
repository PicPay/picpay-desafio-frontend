import { TestBed, getTestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('Service: User', () => {
  let injector: TestBed;
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    injector = getTestBed();
    service = injector.get(UserService);
    httpMock = injector.get(HttpTestingController);
  });

  it('#get should return array of users', () => {
    const dummyUsers = [
      {
        id: 1,
        name: 'Rodolfo',
        img: 'https://randomuser.me/api/portraits/men/9.jpg',
        username: '@rodolfo'
      },
      {
        id: 2,
        name: 'Julia',
        img: 'https://randomuser.me/api/portraits/men/9.jpg',
        username: '@julia'
      }
    ];

    service.users.subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(dummyUsers);
    });
  });
});
