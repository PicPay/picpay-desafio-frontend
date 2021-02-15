import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSuccessComponent } from './payment-success.component';
import { PaymentsModule } from 'src/app/view/payments/payments.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PaymentSuccessComponent', () => {
  let component: PaymentSuccessComponent;
  let fixture: ComponentFixture<PaymentSuccessComponent>;

  beforeEach(async(() => {
    component = new PaymentSuccessComponent();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
