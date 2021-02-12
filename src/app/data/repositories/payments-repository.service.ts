import { Injectable } from '@angular/core';
import { RepositoryBase } from 'src/app/core/interfaces/repository-base.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentsRepositoryService implements Pick<RepositoryBase, 'insert'> {

  constructor(private http: HttpClient) { }

  insert<T>() {
    return this.http.post<T>('', {});
  }
}
