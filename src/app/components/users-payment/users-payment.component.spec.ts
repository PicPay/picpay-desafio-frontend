import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPaymentComponent } from './users-payment.component';

describe('PaymentUsersComponent', () => {
  let component: UsersPaymentComponent;
  let fixture: ComponentFixture<UsersPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
