import { UserEntity } from '../../entities/user-entity';
import { Observable } from 'rxjs';

export abstract class IUsersRepository {
    abstract get(): Observable<UserEntity[]>;
}
