import { CreditCardComponent } from './credit-card.component';

describe('CreditCardComponent', () => {
  function createSubject() {
    return {
      subject: new CreditCardComponent(),
    };
  }

  it('should create instance', () => {
    const { subject } = createSubject();
    expect(subject).toBeTruthy();
  });

  it('should have credit card input data', () => {
    const { subject } = createSubject();

    subject.cardInformation = {
      cvv: '123',
    };

    expect(subject.card).toEqual({ cvv: '123' });
  });
});
