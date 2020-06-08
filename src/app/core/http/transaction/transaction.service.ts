import { Injectable } from "@angular/core";

import { BaseService } from "../base.service";
import { TransactionPayload } from "@shared/models/transaction";

@Injectable({
  providedIn: "root",
})
export class TransactionService {
  constructor(private baseService: BaseService) {}

  createTransaction(data: TransactionPayload) {
    return this.baseService.post(`5d542ec72f000048248614b3`, data);
  }
}
