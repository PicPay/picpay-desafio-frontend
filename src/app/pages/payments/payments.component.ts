import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentStorage } from '@shared/interfaces/payment-storage';
import { PaymentStorageFilter } from '@shared/interfaces/payment-storage-filter';
import { Subscription } from 'rxjs';
import { LocalStorageService } from '@services/local-storage.service';
import { PicPayStore } from '@stores/picpay.store';

@Component({
  selector: 'ngx-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  subs = new Subscription();
  isFullPage = false;
  payments: PaymentStorage[] | null = null;

  constructor(
    private router: Router,
    private picPayStore: PicPayStore,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.subs.add(
      this.router.routerState.root.firstChild.params.subscribe((params) => {
        const filter: PaymentStorageFilter = {};

        if (params && params.id) {
          filter.destination_user_id = Number(params.id);
        } else {
          this.isFullPage = true;
        }

        this.picPayStore.loadUsers().subscribe(() => {
          this.localStorageService
            .loadPayments(filter)
            .subscribe((payments: PaymentStorage[]) => (this.payments = payments));
        });
      })
    );
  }
}
