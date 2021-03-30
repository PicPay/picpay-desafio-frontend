import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { MockPicPayService } from '@mocks/MockPicPayService';
import { PicPayService } from '@services/picpay.service';
import { User } from '@shared/interfaces/user';
import { PicPayStore } from './picpay.store';

describe('PicPayStore', () => {
  let service: PicPayStore;
  let picPayService: PicPayService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PicPayStore,
        {
          provide: PicPayService,
          useClass: MockPicPayService,
        },
      ],
    });
  }));

  beforeEach(() => {
    service = TestBed.get(PicPayStore);
    picPayService = TestBed.get(PicPayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test load users with cashed users', (done) => {
    jest.spyOn(picPayService, 'users');

    /* tslint:disable:no-string-literal */
    service['users'].next([
      {
        id: 1,
        name: 'Test 1',
        username: '@test1',
        img: 'http://test1.png',
      },
    ]);

    service.loadUsers().subscribe((users: User[]) => {
      expect(users.length).toEqual(1);
      expect(picPayService.users).toBeCalledTimes(0);
      done();
    });
  });

  it('test load users without cashed users', (done) => {
    jest.spyOn(picPayService, 'users');

    service.loadUsers().subscribe((users: User[]) => {
      expect(users.length).toEqual(3);
      expect(picPayService.users).toBeCalledTimes(1);
      done();
    });
  });

  it('test load user with cashed users', (done) => {
    jest.spyOn(picPayService, 'users');

    /* tslint:disable:no-string-literal */
    service['users'].next([
      {
        id: 1,
        name: 'Test 1',
        username: '@test1',
        img: 'http://test1.png',
      },
    ]);

    service.loadUser(1).subscribe((user: User) => {
      expect(user.id).toEqual(1);
      expect(picPayService.users).toBeCalledTimes(0);
      done();
    });
  });

  it('test load user without cashed users', (done) => {
    jest.spyOn(picPayService, 'users');

    service.loadUser(2).subscribe((user: User) => {
      expect(user.id).toEqual(2);
      expect(picPayService.users).toBeCalledTimes(1);
      done();
    });
  });
});
