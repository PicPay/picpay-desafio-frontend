import { Observable } from 'rxjs'
import { Card } from '../../models'

export interface GetAllCards {
  getAllCards: () => Observable<GetAllCards.Model>
}

export namespace GetAllCards {
  export type Model = Card
}
