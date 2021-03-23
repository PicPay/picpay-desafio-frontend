import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentBoxComponent } from './payment.component';

describe('PaymentBoxComponent', () => {
  let component: PaymentBoxComponent;
  let fixture: ComponentFixture<PaymentBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
