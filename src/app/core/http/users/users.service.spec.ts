import { TestBed, getTestBed } from "@angular/core/testing";

import { UsersService } from "./users.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { User } from "@shared/models/user";
import { BaseService } from "../base.service";

const dummyUsers: User[] = [
  { id: 1, img: "foo", name: "bar", username: "baz" },
];

describe("UsersService", () => {
  let injector: TestBed;
  let service: UsersService;
  let baseService: BaseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });

    injector = getTestBed();
    service = injector.get(UsersService);
    baseService = injector.get(BaseService);
    httpMock = injector.get(HttpTestingController);
  });

  it("should be created", () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });

  it("getUsers() should return data", () => {
    service.getUsers().subscribe((res) => {
      expect(res).toEqual(dummyUsers);
    });

    const req = httpMock.expectOne(
      `${baseService.apiUrl}5d531c4f2e0000620081ddce`
    );
    expect(req.request.method).toBe("GET");
    req.flush(dummyUsers);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
