import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { PaymentService } from "./payment.service";

describe("PaymentService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  it("should be created", () => {
    const service: PaymentService = TestBed.get(PaymentService);
    expect(service).toBeTruthy();
  });
});
