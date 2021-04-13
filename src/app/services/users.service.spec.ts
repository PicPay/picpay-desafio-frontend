import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    service = TestBed.get(UsersService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('deve ser instanciado', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });

  it('deve buscar dados dos usuários', fakeAsync(() => {
    const fakeBody = [
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
      }
    ]

    service.getUsers().subscribe(response => {
      expect(response).toEqual(fakeBody);
    });

    const request = httpMock.expectOne((req) => {
      return req.method === "GET";
    });

    request.flush(fakeBody);

    tick();
  }));
});
