import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RepositoryBase } from 'src/app/core/interfaces/repository-base.interface';
import { environment } from 'src/environments/environment';

/**
 * Base reposity to handle Payment operations.
 */
@Injectable({
  providedIn: 'root',
})
export class PaymentsRepositoryService implements Pick<RepositoryBase, 'insert'> {
  constructor(private http: HttpClient) {}

  /**
   * Method that executes a POST HTTP request to conclude the transaction.
   * @param transactionPayload data to be send on the HTTP request.
   */
  insert<T>(transactionPayload: T) {
    return this.http.post<T>(environment.api.payments.transaction, { body: transactionPayload });
  }
}
