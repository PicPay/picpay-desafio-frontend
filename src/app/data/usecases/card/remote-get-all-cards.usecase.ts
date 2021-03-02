import { ApiHttpService } from '../../../core/services/api-http.service'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { GetAllCards } from '../../../core/domain/usecases/index'
import { Card } from 'src/app/core/domain/models'

@Injectable({ providedIn: 'root' })
export class RemoteGetAllCards implements GetAllCards {
  constructor(private readonly http: ApiHttpService) {}
  getAllCards: () => Observable<Card>
  execute(url: string): Observable<GetAllCards.Model> {
    return this.http.get<GetAllCards.Model>(url)
  }
}
