import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from 'src/app/@shared/models/user.model';
import { environment } from './../../../../environments/environment';

@Injectable()
export class UserService {
	constructor(private http: HttpClient) { }

	get(): Observable<User[]> {
		return this.http.get<User[]>(environment.apiUrlUsersv1);
	}
	
}