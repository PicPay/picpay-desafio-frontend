import { TestBed, getTestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { User } from "@shared/models/user";
import { BaseService } from "./base.service";

const dummyUsers: User[] = [
  { id: 1, img: "foo", name: "bar", username: "baz" },
];

describe("BaseService", () => {
  let injector: TestBed;
  let service: BaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BaseService],
    });

    injector = getTestBed();
    service = injector.get(BaseService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
