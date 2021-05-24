import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentsModule } from '../payments.module';
import { Card, FlagsCard } from './interfaces/card.interface';

import { ModalPaymentComponent } from './modal-payment.component';

describe('ModalPaymentComponent', () => {
  let component: ModalPaymentComponent;
  let fixture: ComponentFixture<ModalPaymentComponent>;

  beforeEach(( async () => {
    TestBed.configureTestingModule({
      imports: [PaymentsModule]
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(ModalPaymentComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should selected card for payment', () => {
    const instanceComponent = fixture.componentInstance;
    const card: Card = { card_number: "123456789123456", cvv: 123, flag_card: FlagsCard.visa, expiry_date: '10/23' }
    instanceComponent.cardSelectedPay = card;
    fixture.detectChanges();
    expect(instanceComponent.cardSelectedPay).toBe(card)
  })

  it('should clear the payment form', () => {
    const instanceComponent = fixture.componentInstance;
    instanceComponent.successPayment = true;
    instanceComponent.paymentForm = new FormGroup({})
    instanceComponent.clearPaymentForm();
    fixture.detectChanges();
    expect(instanceComponent.value).toEqual(0);
    expect(instanceComponent.cardSelectedPay).toBe(null);
    expect(instanceComponent.successPayment).toEqual(false);
    
  })

  it('should close the payment modal', () => {
    const instanceComponent = fixture.componentInstance;
    instanceComponent.paymentForm = new FormGroup({})
    spyOn(instanceComponent.closeModal, 'emit');
    fixture.detectChanges();
    instanceComponent.handleCloseModal()
    expect(instanceComponent.openModal).toEqual(false)
    expect(instanceComponent.value).toEqual(0);
    expect(instanceComponent.cardSelectedPay).toBe(null);
    expect(instanceComponent.successPayment).toEqual(false);
    expect(instanceComponent.closeModal.emit).toHaveBeenCalled();
  })

  it('should emit payment status for payment component', () => {
    const instanceComponent = fixture.componentInstance;
    instanceComponent.paymentForm = new FormGroup({})
    spyOn(instanceComponent.paymentData, 'emit');
    fixture.detectChanges();
    instanceComponent.emitPaymentStatus()
    expect(instanceComponent.value).toEqual(0);
    expect(instanceComponent.cardSelectedPay).toBe(null);
    expect(instanceComponent.successPayment).toEqual(false);
    expect(instanceComponent.paymentData.emit).toHaveBeenCalled();
  })

  it('should submit form of payment with success', () => {
    const instanceComponent = fixture.componentInstance;
    const card: Card = { card_number: "123456789123456", cvv: 123, flag_card: FlagsCard.visa, expiry_date: '10/23' }
    instanceComponent.successPayment = true;
    instanceComponent.paymentForm = new FormGroup({})
    instanceComponent.paymentForm.setErrors(null);
    instanceComponent.cardSelectedPay = card;
    fixture.detectChanges();
    instanceComponent.handleSubmitPayment(new Event(''))
    expect(instanceComponent.value).toEqual(0);
    expect(instanceComponent.cardSelectedPay).toBe(card);
    expect(instanceComponent.successPayment).toEqual(true);
  })

  it('should submit form of payment with error', () => {
    const instanceComponent = fixture.componentInstance;
    const card: Card = { card_number: "123456789123456", cvv: 123, flag_card: FlagsCard.visa, expiry_date: '10/23' }
    instanceComponent.successPayment = false;
    instanceComponent.paymentForm = new FormGroup({})
    instanceComponent.paymentForm.setErrors(null);
    instanceComponent.cardSelectedPay = card;
    fixture.detectChanges();
    instanceComponent.handleSubmitPayment(new Event(''))
    expect(instanceComponent.value).toEqual(0);
    expect(instanceComponent.cardSelectedPay).toBe(card);
    expect(instanceComponent.successPayment).toEqual(false);
  })

  it('should show loading in button pay', () => {
    const instanceComponent = fixture.componentInstance;
    instanceComponent.handleLoading();
    fixture.detectChanges();
    expect(instanceComponent.loading).toEqual(true);
  })
});
