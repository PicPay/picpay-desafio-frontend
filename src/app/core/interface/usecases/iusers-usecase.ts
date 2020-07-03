import { Observable } from 'rxjs';
import { UserEntity } from '../../entities/user-entity';

export abstract class IUsersUsecase {
    abstract get(): Observable<UserEntity[]>;
}
