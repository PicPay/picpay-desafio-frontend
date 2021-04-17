import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserApi } from './user.api';
import { IUserApiModel, ParseUserToUserApi } from '../../model';
import { userOneMock, userTwoMock } from '@picpay-lib/ngx-domain';

describe('UserApi', () => {
  let service: UserApi;
  let httpTestingController: HttpTestingController;
  const userOne: IUserApiModel = ParseUserToUserApi(userOneMock);
  const userTwo: IUserApiModel = ParseUserToUserApi(userTwoMock);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserApi);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(
    'should return two users',
    waitForAsync(() => {
      const usersMock: IUserApiModel[] = [userOne, userTwo];

      service.retrieveList().subscribe((users) => {
        expect(users[0].id).toEqual(userOne.id);
        expect(users[0].userName).toEqual(userOne.username);

        expect(users[1].id).toEqual(userTwo.id);
        expect(users[1].userName).toEqual(userTwo.username);
      });

      const url = 'v2/5d531c4f2e0000620081ddce';
      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toEqual('GET');

      req.flush(usersMock);
    })
  );
});
