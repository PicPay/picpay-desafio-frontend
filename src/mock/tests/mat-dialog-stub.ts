import { of } from "rxjs";

export class MatDialogMock {
  open() {
    return {
      afterClosed: () => of(true)
    };
  }
}