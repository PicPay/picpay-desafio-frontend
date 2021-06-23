import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPaymentResponseComponent } from './modal-payment-response.component';

describe('ModalPaymentResponseComponent', () => {
  let component: ModalPaymentResponseComponent;
  let fixture: ComponentFixture<ModalPaymentResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPaymentResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPaymentResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
