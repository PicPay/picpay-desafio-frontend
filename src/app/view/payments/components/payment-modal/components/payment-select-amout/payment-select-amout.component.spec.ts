import { createMockFor } from '../../../../../../../../test.utils';
import { PaymentStepService } from '../../payment-step.service';
import { PaymentSelectAmoutComponent } from './payment-select-amout.component';

describe('PaymentSelectAmoutComponent', () => {
  function createSubject({ paymentStep = createMockFor(PaymentStepService) } = {}) {
    return {
      subject: new PaymentSelectAmoutComponent(paymentStep),
      paymentStep,
    };
  }

  it('should create instance', () => {
    const { subject } = createSubject();
    expect(subject).toBeTruthy();
  });

  it('should set active step', () => {
    const { subject, paymentStep } = createSubject();

    subject.setActiveStep();

    expect(paymentStep.setActiveStep).toHaveBeenCalled();
  });

  it('should format number to currency', () => {
    const { subject } = createSubject();

    const number = subject.formatNumber('100');

    expect(number).toEqual('R$ 1,00');
  });
});
