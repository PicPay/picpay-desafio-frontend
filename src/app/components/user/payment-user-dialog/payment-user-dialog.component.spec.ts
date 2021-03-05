import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentUserDialogComponent } from './payment-user-dialog.component';

describe('PaymentUserDialogComponent', () => {
  let component: PaymentUserDialogComponent;
  let fixture: ComponentFixture<PaymentUserDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentUserDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
