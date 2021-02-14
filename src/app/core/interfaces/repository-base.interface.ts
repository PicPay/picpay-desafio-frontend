import { Observable } from 'rxjs';

export abstract class RepositoryBase {
  abstract getAll<T>(): Observable<T[]>;
  abstract insert<T>(item: T): Observable<T>;
  abstract edit(item: any): Observable<any>;
  abstract remove(id: number): Observable<any>;
}
