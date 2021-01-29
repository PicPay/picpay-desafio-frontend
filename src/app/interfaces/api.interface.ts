import { Observable } from "rxjs";
import { IUser } from './user.interface';

export abstract class IApi {
    abstract getUsers(): Observable<IUser[]> 
}