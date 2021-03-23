import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnPaymentComponent } from './return-payment.component';

describe('ReturnPaymentComponent', () => {
  let component: ReturnPaymentComponent;
  let fixture: ComponentFixture<ReturnPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
