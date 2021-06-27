import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from 'src/app/core/http.service';
import { IUser } from '../home/types';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public selectedUser = new BehaviorSubject<IUser | null>(null);

  constructor( public httpService: HttpService) { }

  getUsersList(): Observable<any> {
    return this.httpService.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce');
  }

  updateSelectedUser(user: IUser): void {
    this.selectedUser.next(user);
  }

  getSelectedUser(): Observable<IUser | null> {
    return this.selectedUser.asObservable();
  }
}
