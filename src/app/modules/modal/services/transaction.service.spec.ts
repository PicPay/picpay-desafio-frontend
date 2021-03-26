import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { TransactionService } from "./transaction.service";

describe("TransactionService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  it("should be created", () => {
    const service: TransactionService = TestBed.get(TransactionService);
    expect(service).toBeTruthy();
  });
});
