import { Component, OnDestroy, OnInit } from "@angular/core";
import { User } from "src/app/interfaces/user";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject<void>();
  public users: User[];

  constructor(private UsersService: UsersService) {
    this.UsersService.getUsers().pipe(takeUntil(this.unsubscribe$)).subscribe(users => this.users = users)
  }

  ngOnInit() {}

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
