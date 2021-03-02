import { Observable } from 'rxjs'
import { User } from '../../models'

export interface GetAllUsers {
  getAllUsers: () => Observable<GetAllUsers.Model>
}

export namespace GetAllUsers {
  export type Model = User
}
