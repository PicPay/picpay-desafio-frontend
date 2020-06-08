import { BaseService } from "./base.service";
import { UsersService } from "./users/users.service";
import { TransactionService } from "./transaction/transaction.service";

export const httpServices = [BaseService, UsersService, TransactionService];
