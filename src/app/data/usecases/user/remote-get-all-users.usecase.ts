import { ApiHttpService } from '../../../core/services/api-http.service'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { GetAllUsers } from '../../../core/domain/usecases/index'
import { User } from 'src/app/core/domain/models'

@Injectable({ providedIn: 'root' })
export class RemoteGetAllUsers implements GetAllUsers {
  constructor(private readonly http: ApiHttpService) {}
  getAllUsers: () => Observable<User>
  execute(url: string): Observable<GetAllUsers.Model[]> {
    return this.http.get<GetAllUsers.Model[]>(url)
  }
}
