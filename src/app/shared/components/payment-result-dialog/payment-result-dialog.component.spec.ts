import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentResultDialogComponent } from './payment-result-dialog.component';

xdescribe('PaymentResultDialogComponent', () => {
  let component: PaymentResultDialogComponent;
  let fixture: ComponentFixture<PaymentResultDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentResultDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
