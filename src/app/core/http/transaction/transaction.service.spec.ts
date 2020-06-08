import { TestBed, getTestBed } from "@angular/core/testing";

import { TransactionService } from "./transaction.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { User } from "@shared/models/user";
import { BaseService } from "../base.service";

const dummyUsers: User[] = [
  { id: 1, img: "foo", name: "bar", username: "baz" },
];

describe("TransactionService", () => {
  let injector: TestBed;
  let service: TransactionService;
  let baseService: BaseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransactionService],
    });

    injector = getTestBed();
    service = injector.get(TransactionService);
    baseService = injector.get(BaseService);
    httpMock = injector.get(HttpTestingController);
  });

  it("should be created", () => {
    const service: TransactionService = TestBed.get(TransactionService);
    expect(service).toBeTruthy();
  });

  it("createTransaction() should post payload", () => {
    service
      .createTransaction({
        card_number: "1111",
        cvv: 111,
        destination_user_id: 111,
        expiry_date: "111",
        value: 111.1,
      })
      .subscribe(() => null);

    const req = httpMock.expectOne(
      `${baseService.apiUrl}5d542ec72f000048248614b3`
    );
    expect(req.request.method).toBe("POST");
  });

  afterEach(() => {
    httpMock.verify();
  });
});
