import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPaymentComponent } from './modal-payment.component';

describe('ModalPaymentComponent', () => {
  let component: ModalPaymentComponent;
  let fixture: ComponentFixture<ModalPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
