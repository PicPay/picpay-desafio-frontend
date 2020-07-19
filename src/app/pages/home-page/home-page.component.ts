import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
import { Subscription } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { trigger, transition, style, animate } from '@angular/animations';

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
  usersList = [] as Users[];
  windowWidth = window.screen.width;
  bsModalRef: BsModalRef;
  isLoaded = false;

  constructor(
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

  private handleListOfUsersResponse(response: Users[]) {
    if (response && response.length) {
      this.usersList = response;
    } else {
      alert('Houve um erro com sua requisição');
    }
  }

  makePayment() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...',
      ],
      title: 'Modal with component',
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, {
      initialState,
    });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }
}
