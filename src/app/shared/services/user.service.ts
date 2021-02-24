import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/internal/operators";
import { CURRENT_USER } from "../mock/user.mock";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor() {}

    private currentUser: User;

    public getCurrentUser(): Observable<User> {
        return this.currentUser ? 
                of(CURRENT_USER) : 
                of(CURRENT_USER).pipe(tap((currentUser) => this.currentUser = currentUser)); 
    }
}