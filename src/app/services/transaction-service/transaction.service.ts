import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TransactionState } from 'src/app/models/transaction-state';

@Injectable()
export class TransactionService {
    private state: BehaviorSubject<TransactionState>;

    constructor() {
        this.state = new BehaviorSubject(TransactionState.noTransaction);
    }

    getTransactionState(): Observable<TransactionState> {
        return this.state.asObservable();
    }

    setTransactionState(state: TransactionState): void {
        this.state.next(state);
    }
}
