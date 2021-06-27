import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from 'src/app/core/http.service';
import { TransactionPayload } from 'src/app/shared/ui/payment/types';
import { IUser } from '../home/types';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public selectedUser = new BehaviorSubject<IUser | null>(null);

  constructor( public httpService: HttpService) { }

  getUsersList(): Observable<any> {
    const GET_USERS = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';
    return this.httpService.get(GET_USERS);
  }

  updateSelectedUser(user: IUser): void {
    this.selectedUser.next(user);
  }

  getSelectedUser(): Observable<IUser | null> {
    return this.selectedUser.asObservable();
  }

  submitPayment(transaction: TransactionPayload): Observable<any>{
    const POST_TRANSACTION = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';
    return this.httpService.post(POST_TRANSACTION, transaction);
  }
}
