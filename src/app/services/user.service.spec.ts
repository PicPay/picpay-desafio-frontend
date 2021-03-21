import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { UserService } from './user.service';
import { UserModel } from '../models/user-model';
import { of } from 'rxjs';

describe('UserService', () => {
  let httpClient: HttpClient;
  let service: UserService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: 'USERS_URL', useValue: 'www.fake.com'}
      ]
    });
    service = TestBed.get(UserService);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUsers$', () => {
    it('should call HttpClient with the correct url', () => {
      const fakeUrl = TestBed.get('USERS_URL');
      spyOn(httpClient, 'get');

      service.getUsers$();

      expect(httpClient.get).toHaveBeenCalledWith(fakeUrl);
    });

    it('should return a list of users', () => {
      const users: UserModel[] = [
        {
          id: 1,
          name: 'User 1',
          username: '@user_1',
          img: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
          id: 2,
          name: 'User 2',
          username: '@user_2',
          img: 'https://randomuser.me/api/portraits/women/1.jpg',
        },
        {
          id: 3,
          name: 'User 3',
          username: '@user_3',
          img: 'https://randomuser.me/api/portraits/women/2.jpg',
        },
        {
          id: 4,
          name: 'User 4',
          username: '@user_4',
          img: 'https://randomuser.me/api/portraits/men/2.jpg',
        }
      ];
      spyOn(httpClient, 'get').and.returnValue(of(users));

      const spy = jasmine.createSpy('spy');
      service.getUsers$().subscribe(spy);

      expect(spy).toHaveBeenCalledWith(users);
    });
  });
});
