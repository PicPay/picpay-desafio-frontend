import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RepositoryBase } from 'src/app/core/interfaces/repository-base.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaymentsRepositoryService implements Pick<RepositoryBase, 'insert'> {
  constructor(private http: HttpClient) {}

  insert<T>(transactionPayload: T) {
    return this.http.post<T>(environment.api.payments.transaction, { body: transactionPayload });
  }
}
