import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { TransactionService } from "./transaction.service";

describe("TransactionService", () => {
  let transactionService: TransactionService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransactionService],
    });

    transactionService = TestBed.get(TransactionService);
    http = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it("should be created", () => {
    expect(transactionService).toBeTruthy();
  });

  it("should return success transaction", () => {
    transactionService
      .payload({
        card_number: "1111111111111111",
        cvv: 789,
        expiry_date: "01/18",
        destination_user_id: 1010,
        value: 10000,
      })
      .subscribe((status) => {
        expect(status).toEqual({
          success: true,
          status: "Aprovada",
        });
      });

    const req = http.expectOne('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989');
    expect(req.request.method).toBe('POST');
  });
});
