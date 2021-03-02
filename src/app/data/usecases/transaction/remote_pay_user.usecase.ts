import { ApiHttpService } from '../../../core/services/api-http.service'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { PayUser } from '../../../core/domain/usecases/index'
import { Transaction } from 'src/app/core/domain/models'

@Injectable({ providedIn: 'root' })
export class RemotePayUser implements PayUser {
  constructor(private readonly http: ApiHttpService) {}
  payUser: (paymentData: PayUser.Params) => Observable<Transaction>

  execute(url: string, paymentData: PayUser.Params): Observable<Transaction> {
    return this.http.post<PayUser.Params>(url, paymentData)
  }
}
