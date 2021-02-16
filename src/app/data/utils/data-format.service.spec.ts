import { DataFormatService } from './data-format.service';
import { creditCard } from 'src/app/core/types/credit-card.type';

describe('DataFormatService', () => {
  function createSubject() {
    return {
      subject: new DataFormatService(),
    };
  }

  it('should create instance', () => {
    const { subject } = createSubject();
    expect(subject).toBeTruthy();
  });

  it('should format number to currency', () => {
    const { subject } = createSubject();

    const number = subject.formatNumberToCurrency('100');
    expect(number).toEqual('R$ 1,00');
  });

  it('should format number to currency with more than 6 digits', () => {
    const { subject } = createSubject();

    const number = subject.formatNumberToCurrency('1000000');
    expect(number).toEqual('R$ 10.000,00');
  });

  it('should return empty', () => {
    const { subject } = createSubject();

    const number = subject.formatNumberToCurrency('R$');
    expect(number).toEqual('');
  });

  it('should add credit number spaces on string', () => {
    const { subject } = createSubject();

    const number = subject.addCreditCardNumberSpaces('1111111111111111');
    expect(number).toEqual('1111 1111 1111 1111');
  });

  it('should add new property to creditcard list', () => {
    const { subject } = createSubject();

    const userCreditCards: creditCard[] = [
      {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
      },
      {
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
      },
      {
        card_number: '4111111111119859',
        cvv: 123,
        expiry_date: '01/20',
      },
    ];

    const listExpect: any[] = [
      {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
        numberView: '**** 1111',
      },
      {
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
        numberView: '**** 1234',
      },
      {
        card_number: '4111111111119859',
        cvv: 123,
        expiry_date: '01/20',
        numberView: '**** 9859',
      },
    ];

    expect(subject.formatCardNumberMask(userCreditCards)).toEqual(listExpect);
  });
});
