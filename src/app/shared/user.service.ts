import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    apiUrl: string;

    constructor(private http: HttpClient) {
        this.apiUrl = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';
    }

    getUsers(page: number): Observable<{ count: number, results: User[] }> {
        return this.http.get<User[]>(this.apiUrl).pipe((map((users: User[]) => {
            const pageSize = 10;
            const start = pageSize * page;

            return {
                count: users.length,
                results: users.slice(start, start + pageSize)
            };
        })));
    }
}
