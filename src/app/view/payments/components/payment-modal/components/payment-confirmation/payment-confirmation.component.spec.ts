import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentConfirmationComponent } from './payment-confirmation.component';

describe('PaymentConfirmationComponent', () => {
  let component: PaymentConfirmationComponent;
  let fixture: ComponentFixture<PaymentConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
