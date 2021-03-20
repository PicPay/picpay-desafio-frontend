import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { UsersService } from "./users.service";

fdescribe("TransactionsService", () => {
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService],
      imports: [HttpClientModule],
    });
    usersService = TestBed.get(UsersService);
  });

  it("should be created", () => {
    expect(usersService).toBeDefined();
  });

  it("should have getUsers() function"),
    () => {
      // P
      const serviceGetUsersSpy = spyOn(usersService, "getUsers");
      // A
      usersService.getUsers();
      // V
      expect(serviceGetUsersSpy).toHaveBeenCalled();
    };
});
