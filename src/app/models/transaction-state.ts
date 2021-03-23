import { User } from "./user";

export enum TransactionStage {
    noTransaction = 'noTransaction',
    onTransaction = 'onTransaction',
    processingTransaction = 'processingTransaction',
    transactionSucceeded = 'transactionSucceeded',
    transactionFailed = 'transactionFailed'
}

export class TransactionState {
    phase: TransactionStage;
    user: User;
}