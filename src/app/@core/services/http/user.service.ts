import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@shared/models/user.model';
import { Observable } from 'rxjs';

import { environment } from './../../../../environments/environment';

@Injectable()
export class UserService {
	constructor(private http: HttpClient) { }

	get(): Observable<User[]> {
		return this.http.get<User[]>(environment.apiUrlUsersv1);
	}
	
}