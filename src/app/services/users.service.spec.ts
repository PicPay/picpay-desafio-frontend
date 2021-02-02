import { getTestBed, TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { UsersService } from "./users.service";

describe("UsersService", () => {
  let injector: TestBed;
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });

    injector = getTestBed();
    service = injector.get(UsersService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });

  it("should get users from API", () => {
    const mockUsers = [
      {
        id: 0,
        name: "Test User",
        img: "test.jpg",
        username: "@test",
      },
      {
        id: 2,
        name: "Test User",
        img: "test.jpg",
        username: "@test2",
      },
      {
        id: 66,
        name: "Test User",
        img: "test.jpg",
        username: "@test66",
      },
    ];

    service.getUsers().subscribe((users) => {
      expect(users.length).toBe(3);
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne(service.API_URL);
    expect(req.request.method).toBe("GET");
    req.flush(mockUsers);
  });
});
