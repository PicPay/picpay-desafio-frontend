import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentReceiptModalComponent } from './payment-receipt-modal.component';

describe('PaymentReceiptModalComponent', () => {
  let component: PaymentReceiptModalComponent;
  let fixture: ComponentFixture<PaymentReceiptModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentReceiptModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentReceiptModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
