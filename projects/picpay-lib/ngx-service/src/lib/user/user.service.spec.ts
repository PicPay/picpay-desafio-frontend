import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserApi } from '@picpay-lib/ngx-api';
import { User, userOneMock, userTwoMock } from '@picpay-lib/ngx-domain';
import { of } from 'rxjs';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let userApi: UserApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
    userApi = TestBed.inject(UserApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getList', (done) => {
    const spy = spyOn(userApi, 'retrieveList').and.returnValue(of([userOneMock, userTwoMock]));

    service.getList().subscribe((result) => {
      expect(result[0]).toBeInstanceOf(User);
      expect(result[0].id).toEqual(userOneMock.id);
      expect(result[1]).toBeInstanceOf(User);
      expect(result[1].id).toEqual(userTwoMock.id);
      expect(spy).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
