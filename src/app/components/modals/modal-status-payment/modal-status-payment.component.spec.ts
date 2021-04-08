import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStatusPaymentComponent } from './modal-status-payment.component';

describe('ModalStatusPaymentComponent', () => {
  let component: ModalStatusPaymentComponent;
  let fixture: ComponentFixture<ModalStatusPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalStatusPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalStatusPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
