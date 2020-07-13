import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, OnDestroy {
  // Models
  public users: User[];
  public user: User;
  // Modal controls
  public showPaymentModal = false;
  public showFeedbackModal = false;
  // Initial loading for fetching users
  public loadingUsers = true;
  // Unsubscribe subject
  private readonly unsubscribe$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) { }

  ngOnInit() {
    if (!this.users) {
      this.getUsers();
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getUsers(): void {
    this.userService.getUsers()
      .pipe(takeUntil(this.unsubscribe$))
        .subscribe(users => {
          const id = +this.route.snapshot.paramMap.get('id');
          this.users = users;
          this.loadingUsers = false;
          if (id) {
            this.forcePaymentModal(id);
          }
        });
  }

  forcePaymentModal(userId: number): void {
    const filteredUser = this.users.filter(item => item.id === userId);
    if (filteredUser.length > 0) {
      this.user = filteredUser[0];
      this.showPaymentModal = true;
    } else {
      // TODO: improve user feedback, toast of 'user not found', maybe?
      this.location.go('payment');
    }
  }

  payClickHandler(user: User): void {
    this.user = user;
    this.showPaymentModal = true;
    this.location.go(`payment/user/${user.id}`);
  }

  paymentFormHandleClose(): void {
    this.location.go('payment');
    this.showPaymentModal = false;
  }

  paymentFeedbackHandleClose(): void {
    this.location.go('payment');
    this.showFeedbackModal = false;
  }
}
