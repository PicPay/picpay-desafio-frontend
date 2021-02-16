
import { PaymentStepService } from './payment-step.service';

describe('PaymentStepService', () => {
  function createSubject() {
    return {
      subject: new PaymentStepService(),
    };
  }

  it('should create instance', () => {
    const { subject } = createSubject();
    expect(subject).toBeTruthy();
  });

  it('should set active step', () => {
    const { subject } = createSubject();

    subject.setActiveStep('confirmData');

    subject.getActiveStep().subscribe(res => expect(res).toEqual('confirmData'))
  });
});
