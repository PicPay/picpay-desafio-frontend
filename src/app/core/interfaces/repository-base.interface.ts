import { Observable } from 'rxjs';

export abstract class RepositoryBase {
  abstract getAll(): Observable<any[]>;
  abstract insert<T>(item: any): Observable<T>;
  abstract edit(item: any): Observable<any>;
  abstract remove(id: number): Observable<any>;
}
