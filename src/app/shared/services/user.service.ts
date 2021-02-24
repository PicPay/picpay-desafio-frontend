import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/internal/operators";
import { CURRENT_USER } from "../mock/user.mock";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(
        private http: HttpClient) {}

    private readonly API_URL: string = "https://www.mocky.io/v2/";

    private currentUser: User;

    public getCurrentUser(): Observable<User> {
        return this.currentUser ? 
                of(CURRENT_USER) : 
                of(CURRENT_USER).pipe(tap((currentUser) => this.currentUser = currentUser)); 
    }

    public getAllContacts(): Observable<User[]> {
        return this.http.get<User[]>(`${this.API_URL}5d531c4f2e0000620081ddce`);
    }
}