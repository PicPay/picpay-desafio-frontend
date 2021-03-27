import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '@shared/interfaces/user';
import { PicPayStore } from '@shared/stores/picpay.store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  subs = new Subscription();
  user: User | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private picPayStore: PicPayStore
  ) {}

  ngOnInit(): void {
    this.subs.add(
      this.route.params.subscribe((params) => {
        this.picPayStore.loadUser(Number(params.id)).subscribe((user: User) => {
          if (!user) {
            this.router.navigate(['/not-found']);
            return;
          }

          this.user = user;
        });
      })
    );
  }

  onPay(): void {
    this.router.navigate(['/users', this.user.id, 'payment']);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
