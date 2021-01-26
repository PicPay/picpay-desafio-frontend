import { Observable, of } from "rxjs";
import { User } from "src/app/interfaces/user.interface";

export class UsersServiceMock {
  public getUsers(): Observable<User[]> {
    return of([
      {
        id: 1018,
        img: "https://randomuser.me/api/portraits/men/3.jpg",
        name: "André Castro",
        username: "@andre.castro",
      },
    ]);
  }
}
