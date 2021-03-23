import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransactionPayload } from 'src/app/models/transaction-payload';
import { TransactionStage, TransactionState } from 'src/app/models/transaction-state';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

export class TransactionMockService {
    private state: BehaviorSubject<TransactionState>;

    constructor() {
        const initialState: TransactionState = {
            phase: TransactionStage.noTransaction,
            user: null
        }
        this.state = new BehaviorSubject(initialState);
    }

    private setTransactionState(transactionState: TransactionState): void {
        const newState: TransactionState = {
            ...transactionState,
            user: {...transactionState.user}
        }
        this.state.next(newState);
    }

    getTransactionStage(): Observable<TransactionStage> {
        return this.state
            .asObservable()
            .pipe( 
                map( state => state.phase )
            );
    }

    getTransactionUser(): Observable<User> {
        return this.state
            .asObservable()
            .pipe( 
                map( state => state.user)
            );
    }

    initTransaction(user: User): void {
        this.setTransactionState({
            phase: TransactionStage.onTransaction,
            user
        });
    }

    startLoadingProcessTransaction(): void {
        this.setTransactionState({
            phase: TransactionStage.processingTransaction,
            user: null
        });
    }

    competeTransactionSucceeded(): void {
        this.setTransactionState({
            phase: TransactionStage.transactionSucceeded,
            user: null
        });
    }
    completeTransactionFailed(): void {
        this.setTransactionState({
            phase: TransactionStage.transactionFailed,
            user: null
        });
    }
    
    endTransaction(): void {
        this.setTransactionState({
            phase: TransactionStage.noTransaction,
            user: null
        });
    }

    processTransaction(payload: TransactionPayload): Observable<any> {
        return of({});
    }
}
