import { Location } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from 'src/app/shared/models/user.model';
import { PaymentService } from 'src/app/shared/services/payment/payment.service';

import { UserListItemComponent } from './user-list-item.component';

describe('UserListItemComponent', () => {
  let component: UserListItemComponent;
  let fixture: ComponentFixture<UserListItemComponent>;
  let paymentServiceSpy: jasmine.SpyObj<PaymentService>;
  let testUser: User = {
    id: 0,
    name: 'Test User',
    username: '@test-user',
    img: 'test-image-path',
  };

  beforeEach(async(() => {
    paymentServiceSpy = jasmine.createSpyObj('PaymentService', [
      'startPayment',
    ]);

    TestBed.configureTestingModule({
      declarations: [UserListItemComponent],
      providers: [{ provide: PaymentService, useValue: paymentServiceSpy }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud display user info', () => {
    component.user = testUser;

    fixture.detectChanges();

    let nameElement: HTMLElement = fixture.nativeElement.querySelector(
      '.user-name'
    );
    expect(nameElement.innerHTML.trim()).toBe(
      testUser.name.trim(),
      "user's name"
    );

    let usernameElement: HTMLElement = fixture.nativeElement.querySelector(
      '.user-username'
    );
    expect(usernameElement.innerHTML.trim()).toBe(
      testUser.username.trim(),
      "user's username"
    );

    let imgElement: HTMLImageElement = fixture.nativeElement.querySelector(
      '.user-img'
    );
    let imgFullUrl = Location.joinWithSlash(
      window.location.origin,
      testUser.img.trim()
    );
    expect(imgElement.src.trim()).toBe(imgFullUrl, "user's image");
  });

  it('should call PaymentService#startPayment when the button is clicked', () => {
    component.user = testUser;

    fixture.detectChanges();

    let button: HTMLButtonElement = fixture.nativeElement.querySelector(
      'button.pay-button'
    );

    button.click();

    expect(paymentServiceSpy.startPayment.calls.count()).toBe(1, 'one call');
  });

  it('should not call PaymentService#startPayment when the button is clicked if there is no user', () => {
    let button: HTMLButtonElement = fixture.nativeElement.querySelector(
      'button.pay-button'
    );

    button.click();

    expect(paymentServiceSpy.startPayment.calls.count()).toBe(0, 'no call');
  });
});
