import { CreditCardComponent } from './credit-card.component';
import { DataFormatService } from 'src/app/data/utils/data-format.service';
import { createMockFor } from '../../../../../test.utils';

describe('CreditCardComponent', () => {
  function createSubject({ dataFormat = createMockFor(DataFormatService) } = {}) {
    return {
      subject: new CreditCardComponent(dataFormat),
    };
  }

  it('should create instance', () => {
    const { subject } = createSubject();
    expect(subject).toBeTruthy();
  });

  it('should have credit card input data', () => {
    const { subject } = createSubject();

    subject.cardInformation = {
      cvv: 123,
      expiry_date: '21/21/21',
      card_number: '111111111111111',
    };

    expect(subject.card).toEqual({
      cvv: 123,
      expiry_date: '21/21/21',
      card_number: '111111111111111',
    });
  });
});
