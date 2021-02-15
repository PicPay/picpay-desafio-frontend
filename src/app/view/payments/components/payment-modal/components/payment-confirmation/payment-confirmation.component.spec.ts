import { PaymentConfirmationComponent } from './payment-confirmation.component';

describe('PaymentConfirmationComponent', () => {
  function createSubject() {
    return {
      subject: new PaymentConfirmationComponent(),
    };
  }

  it('should create instance', () => {
    const { subject } = createSubject();
    expect(subject).toBeTruthy();
  });

  it('should set value with mask', () => {
    const { subject } = createSubject();
    const value = {
      value: '100',
    }
    subject.handleInputMask(value);

    expect(subject.value).toEqual('R$ 1,00');

  });

  it('should set value with mask with more thna 6 digits', () => {
    const { subject } = createSubject();
    const value = {
      value: '10000000',
    }
    subject.handleInputMask(value);

    expect(subject.value).toEqual('R$ 100.000,00');

  });

  it('should set disabled to false', () => {
    const { subject } = createSubject();
    subject.handleValueEdition();

    expect(subject.disabled).toBeFalsy();
  });
});
