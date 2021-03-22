import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransactionPayload } from 'src/app/models/transaction-payload';
import { TransactionStage, TransactionState } from 'src/app/models/transaction-state';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable()
export class TransactionService {
    private state: BehaviorSubject<TransactionState>;

    constructor(private http: HttpClient) {
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
    
    private fixModalOverlay( modalIs : 'opened'|'closed'): void {
        const body = document.querySelector('body');
        if( modalIs === 'opened') {
            body.classList.add('modal-open');
        } else {
            body.classList.remove('modal-open');
        }
    }
    initTransaction(user: User): void {
        this.setTransactionState({
            phase: TransactionStage.onTransaction,
            user
        });
        this.fixModalOverlay('opened');
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
        this.fixModalOverlay('closed');
    }

    processTransaction(payload: TransactionPayload): Observable<any> {
        const endpoint = '/533cd5d7-63d3-4488-bf8d-4bb8c751c989'
        const url = `${environment.mockApiV3}${endpoint}`

        return this.http.post<any>(url, payload);
    }
}
