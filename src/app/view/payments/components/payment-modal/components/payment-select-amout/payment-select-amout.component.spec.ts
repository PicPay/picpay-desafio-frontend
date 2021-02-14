import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSelectAmoutComponent } from './payment-select-amout.component';

describe('PaymentSelectAmoutComponent', () => {
  let component: PaymentSelectAmoutComponent;
  let fixture: ComponentFixture<PaymentSelectAmoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentSelectAmoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSelectAmoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
