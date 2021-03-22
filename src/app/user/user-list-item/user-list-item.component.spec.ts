import {Location} from '@angular/common';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {User} from 'src/app/shared/models/user.model';
import {PaymentService} from 'src/app/shared/services/payment/payment.service';

import {UserListItemComponent} from './user-list-item.component';

describe('UserListItemComponent', () => {
  let component: UserListItemComponent;
  let fixture: ComponentFixture<UserListItemComponent>;
  let paymentServiceSpy: jasmine.SpyObj<PaymentService>;
  const testUser: User = {
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

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display user info', () => {
    component.user = testUser;

    fixture.detectChanges();

    const nameElement: HTMLElement = fixture.nativeElement.querySelector(
      '.user-name'
    );
    expect(nameElement.textContent.trim()).toBe(
      testUser.name.trim(),
      'name of the user'
    );

    const usernameElement: HTMLElement = fixture.nativeElement.querySelector(
      '.user-username'
    );
    expect(usernameElement.textContent.trim()).toBe(
      testUser.username.trim(),
      'username of the user'
    );

    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector(
      '.user-img'
    );
    const imgFullUrl = Location.joinWithSlash(
      window.location.origin,
      testUser.img.trim()
    );
    expect(imgElement.src.trim()).toBe(imgFullUrl, 'user image url');
  });

  it('should call PaymentService#startPayment when the button is clicked', () => {
    component.user = testUser;

    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector(
      'button.pay-button'
    );

    button.click();

    expect(paymentServiceSpy.startPayment.calls.count()).toBe(1, 'one call');
  });

  it('should not call PaymentService#startPayment when the button is clicked if there is no user', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector(
      'button.pay-button'
    );

    button.click();

    expect(paymentServiceSpy.startPayment.calls.count()).toBe(0, 'no call');
  });
});
