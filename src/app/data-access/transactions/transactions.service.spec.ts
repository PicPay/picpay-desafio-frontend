import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { TransactionPayload } from "./interfaces/transactions-payload.interface";

import { TransactionsService } from "./transactions.service";

describe("TransactionsService", () => {
  let transactionsService: TransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionsService],
      imports: [HttpClientModule],
    });
    transactionsService = TestBed.get(TransactionsService);
  });

  it("should be created", () => {
    expect(transactionsService).toBeTruthy();
  });

  it("should have postTransaction() function"),
    () => {
      // P
      const mockPayload: TransactionPayload = {
        card_number: "xxx",
        cvv: 0,
        expiry_date: "xxx",
        destination_user_id: 0,
        value: 0,
      };
      const expectedPayload: TransactionPayload = mockPayload;

      const servicePostTransactionSpy = spyOn(
        transactionsService,
        "postTransaction"
      );
      // A
      transactionsService.postTransaction(mockPayload);
      // V
      expect(servicePostTransactionSpy).toHaveBeenCalledWith(expectedPayload);
    };
});
