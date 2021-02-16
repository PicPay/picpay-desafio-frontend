import { createMockFor } from './../../../../../../test.utils';
import { PaymentModalComponent } from './payment-modal.component';
import { PaymentStepService } from './services/payment-step.service';
import { UserStateService } from './services/user-state.service';

describe('PaymentModalComponent', () => {
  function createSubject({
    paymentStep = createMockFor(PaymentStepService),
    data = {
      id: 1001,
      name: 'Eduardo Santos',
      img: 'https://randomuser.me/api/portraits/men/9.jpg',
      username: '@eduardo.santos',
    },
    userState = createMockFor(UserStateService),
  } = {}) {
    return {
      subject: new PaymentModalComponent(paymentStep, { user: data }, userState),
      paymentStep,
      userState
    };
  }

  it('should create instance', () => {
    const { subject } = createSubject();
    expect(subject).toBeTruthy();
  });
});
