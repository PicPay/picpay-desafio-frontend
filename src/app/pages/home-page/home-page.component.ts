import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users/users.service';
import { Subscription } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { trigger, transition, style, animate } from '@angular/animations';
import { PaymentDialogComponent } from 'src/app/components/payment-dialog/payment-dialog.component';
import { ModalData } from 'src/app/models/modal-data';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('1s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
})
export class HomePageComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  usersList = [] as User[];
  windowWidth = window.screen.width;
  modalRef: BsModalRef;
  isLoaded = false;

  constructor(
    private alert: AlertsService,
    private usersService: UsersService,
    private modalService: BsModalService,
  ) {}

  ngOnInit(): void {
    this.getListOfUsers();
  }

  private getListOfUsers() {
    this.subscriptions.add(
      this.usersService.getListOfUsers().subscribe((response) => {
        this.handleListOfUsersResponse(response);
        this.isLoaded = true;
      }),
    );
  }

  private handleListOfUsersResponse(response: User[]) {
    if (response && response.length) {
      this.usersList = response;
    } else {
      this.alert.showErrorToast();
    }
  }

  openMakePaymentDialog(user: User) {
    const modalData: ModalData<User> = {
      outerData: user,
    };

    this.modalRef = this.modalService.show(PaymentDialogComponent, {
      class: 'modal-580 modal-dialog-centered',
      ignoreBackdropClick: true,
      animated: false,
      initialState: modalData,
    });
  }

  handleClosingDialog() {
    this.subscriptions.add(
      this.modalService.onHide.subscribe(() => {
        this.modalRef.hide();
      }),
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }
}
