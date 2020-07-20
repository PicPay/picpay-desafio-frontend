import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { takeWhile } from 'rxjs/operators';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PaymentComponent } from 'src/app/components/payment/payment.component';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private isAlive = true;
  arrUsers: User[] = [];

  constructor(
    private serverService: ServerService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.serverService
      .getUsers()
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((users) => {
        this.arrUsers = users;
      });
  }

  modalPayment(user: User) {
    this.modalService.show(PaymentComponent, {
      initialState: { user },
      ignoreBackdropClick: true,
      animated: false,
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
