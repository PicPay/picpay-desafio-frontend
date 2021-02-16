import { TestBed } from '@angular/core/testing';

import { UserStateService } from './user-state.service';

describe('UserStateService', () => {
  function createSubject() {
    return {
      subject: new UserStateService(),
    };
  }

  it('should create instance', () => {
    const { subject } = createSubject();
    expect(subject).toBeTruthy();
  });

  it('should set payment value', () => {
    const { subject } = createSubject();
    subject.setPaymentValue('R$ 10,00');

    subject.getPaymentValue().subscribe((res) => expect(res).toEqual('R$ 20,00'));
  });

  it('should set selected user for payment', () => {
    const { subject } = createSubject();
    subject.setUSerSelectedForPayment({
      id: 112,
      name: 'Flávio',
      img: 'img',
      username: '@flavio',
    });

    subject.getUserSelectedForPayment().subscribe((res) =>
      expect(res).toEqual({
        id: 112,
        name: 'Flávio',
        img: 'img',
        username: '@flavio',
      })
    );
  });
});
