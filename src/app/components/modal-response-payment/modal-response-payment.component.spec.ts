import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResponsePaymentComponent } from './modal-response-payment.component';

describe('ModalResponsePaymentComponent', () => {
  let component: ModalResponsePaymentComponent;
  let fixture: ComponentFixture<ModalResponsePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalResponsePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalResponsePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
