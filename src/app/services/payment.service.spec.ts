import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { getTestBed, TestBed } from "@angular/core/testing";
import { of } from "rxjs";

import { PaymentService } from "./payment.service";

describe("PaymentService", () => {
  let injector: TestBed;
  let service: PaymentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PaymentService],
    });

    injector = getTestBed();
    service = injector.get(PaymentService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    const service: PaymentService = TestBed.get(PaymentService);
    expect(service).toBeTruthy();
  });

  it("should post a payment", () => {
    const transaction = {
      card_number: "1111111111111111",
      cvv: 123,
      expiry_date: "01/01",
      destination_user_id: 0,
      value: 10,
    };

    service.createTransaction(transaction).subscribe((res) => {
      expect(res.success).toBeTruthy();
    });

    const req = httpMock.expectOne(service.API_URL);
    expect(req.request.method).toBe("POST");
  });

  it("should refuse a payment from an invalid card", () => {
    const transaction = {
      card_number: "1111111111111111",
      cvv: 123,
      expiry_date: "01/01",
      destination_user_id: 0,
      value: 10,
    };

    spyOn<any>(service, "validateCard").and.returnValue(of(false));

    service.createTransaction(transaction).subscribe((res) => {
      expect(res.success).toBeFalsy();
    });
  });
});
