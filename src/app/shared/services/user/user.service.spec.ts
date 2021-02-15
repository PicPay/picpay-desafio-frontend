import { TestBed } from '@angular/core/testing';
import { ApiService } from '@core/services/api/api.service';
import { MOCK_USERS } from '@shared/mocks/user/user.mock';
import { of } from 'rxjs';
import { UserFilter, UserService } from './user.service';

describe('UserService', () => {
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let userService: UserService;

  beforeEach(() => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['list']);
    TestBed.configureTestingModule({
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        UserService,
      ],
    });
    userService = TestBed.get(UserService);
  });

  it('should retrive all users', () => {
    apiServiceSpy.list.and.returnValue(of(MOCK_USERS));
    userService.listUsers().subscribe((users) => {
      expect(users).toBeTruthy('No user returned');
      expect(users.length).toEqual(10, 'Unexpected users length');
      expect(users[0].name).toEqual('Mock User 1');
    });
  });

  it('should retrive all user filter key', () => {
    const keys = userService.listUserFilterKeys();
    expect(keys.length).toBe(3);
    expect(
      keys.find((key) => key.toLowerCase() === UserFilter[1].toLowerCase())
    ).toBe('ALL');
    expect(
      keys.find((key) => key.toLowerCase() === UserFilter[2].toLowerCase())
    ).toBe('PAID');
    expect(
      keys.find((key) => key.toLowerCase() === UserFilter[3].toLowerCase())
    ).toBe('PENDING');
  });
});
