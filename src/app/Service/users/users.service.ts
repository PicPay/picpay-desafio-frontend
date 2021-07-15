import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { environment } from 'src/environments/environment';
import { IUser } from 'src/app/Models/IUsers';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private httpClient: HttpClient) { }

  getAllInfos(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(environment.getUserInfo);
   }
}