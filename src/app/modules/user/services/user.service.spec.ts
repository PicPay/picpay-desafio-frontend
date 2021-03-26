import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { UserService } from "./user.service";

describe("UserService", () => {
  beforeEach(async () =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  it("should be created", () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
