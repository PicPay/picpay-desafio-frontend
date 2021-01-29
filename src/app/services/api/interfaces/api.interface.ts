import { Observable } from "rxjs";

export abstract class IApi {
    abstract getUsers(): Observable<IUser[]> 
}

export interface IUser {
    id:number,
    name:String,
    img:String,
    username:String
}