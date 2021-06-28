import { of } from 'rxjs';
import { usersStub } from './users-stub';

export class MatDialogMock {
  open():any{
    return {
      afterClosed: () => of(usersStub[0])
    };
  }
  close():any{
    afterClosed: () => of(usersStub[0])
  }
}