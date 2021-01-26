import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { UsersService } from "./users.service";

describe("UsersService", () => {
  let usersService: UsersService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });

    usersService = TestBed.get(UsersService);
    http = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it("should be created", () => {
    expect(usersService).toBeTruthy();
  });

  it("should return an array of user objects", () => {
    usersService.getUsers().subscribe(users => {
      expect(users.length).toBeGreaterThan(1)
    });

    const req = http.expectOne('https://www.mocky.io/v2/5d531c4f2e0000620081ddce');
    expect(req.request.method).toBe('GET');
  });
});
