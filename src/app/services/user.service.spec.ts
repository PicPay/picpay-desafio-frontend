import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { UserService } from './user.service';

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
      const fakeUrl = TestBed.get('USERS_URL')
      spyOn(httpClient, 'get')

      service.getUsers$()

      expect(httpClient.get).toHaveBeenCalledWith(fakeUrl)
    });
  });
});
