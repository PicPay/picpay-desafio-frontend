import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.interface';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
      ],
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test user list return', () => {
    const baseApiUrl = 'https://www.mocky.io';
    const MOCK_USERS: User[] = [
      {
        id: 1001,
        name: 'Eduardo Santos',
        img: 'https://randomuser.me/api/portraits/men/9.jpg',
        username: '@eduardo.santos'
      }
    ];

    service.getUsers().subscribe((users: User[]) => {
      expect(users.length).toEqual(1);
      expect(users[0].id).toEqual(1001);
      expect(users[0].name).toEqual('Eduardo Santos');
      expect(users[0].img).toEqual('https://randomuser.me/api/portraits/men/9.jpg');
      expect(users[0].username).toEqual('@eduardo.santos');
    });

    const req = httpMock.expectOne(`${baseApiUrl}/v2/5d531c4f2e0000620081ddce`);
    expect(req.request.method).toEqual('GET');

    req.flush(MOCK_USERS);

    httpMock.verify();
  });
});
