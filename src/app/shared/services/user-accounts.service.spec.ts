import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserAccountsService } from './user-accounts.service';
const allUsers = [
  {
    "id": 1001,
    "name": "Eduardo Santos",
    "img": "https://randomuser.me/api/portraits/men/9.jpg",
    "username": "@eduardo.santos"
  },
  {
    "id": 1002,
    "name": "Marina Coelho",
    "img": "https://randomuser.me/api/portraits/women/37.jpg",
    "username": "@marina.coelho"
  },
  {
    "id": 1003,
    "name": "Márcia da Silva",
    "img": "https://randomuser.me/api/portraits/women/57.jpg",
    "username": "@marcia.silva"
  }
]
describe('UserAccountsService', () => {
  let service: UserAccountsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(UserAccountsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return all users', (done) => {
    service.getUserAccounts().subscribe(
      response => {
        expect(JSON.stringify(response)).toEqual(JSON.stringify(allUsers), 'expected all users');
        done();
      },
      done.fail
    );

    const req = httpTestingController.expectOne(service.USER_ACCOUNT_URL);
    req.flush(allUsers);
  })
});
