import { createMockFor } from '../../../../../../../../test.utils';
import { PaymentStepService } from '../../services/payment-step.service';
import { PaymentSelectAmoutComponent } from './payment-select-amout.component';
import { UserStateService } from '../../services/user-state.service';
import { DataFormatService } from 'src/app/data/utils/data-format.service';

describe('PaymentSelectAmoutComponent', () => {
  function createSubject({
    paymentStep = createMockFor(PaymentStepService),
    userStore = createMockFor(UserStateService),
    dataFormat = createMockFor(DataFormatService),
  } = {}) {
    return {
      subject: new PaymentSelectAmoutComponent(paymentStep, userStore, dataFormat),
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
});
