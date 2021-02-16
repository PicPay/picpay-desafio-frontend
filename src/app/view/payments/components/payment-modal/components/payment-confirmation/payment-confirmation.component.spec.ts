import { PaymentConfirmationComponent } from './payment-confirmation.component';
import { createMockFor } from './../../../../../../../../test.utils';
import { PaymentsUsecasesService } from 'src/app/data/usecases/payments/payments-usecases.service';
import { PaymentStepService } from '../../services/payment-step.service';
import { UserStateService } from '../../services/user-state.service';
import { DataFormatService } from 'src/app/data/utils/data-format.service';
import { of } from 'rxjs';
import { creditCard } from 'src/app/core/types/credit-card.type';

const user = {
  id: 112,
  name: 'Flávio',
  img: 'img',
  username: '@flavio',
};

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

describe('PaymentConfirmationComponent', () => {
  function createSubject({
    paymentStep = createMockFor(PaymentStepService),
    userStore = createMockFor(UserStateService),
    paymentUsesCases = createMockFor(PaymentsUsecasesService),
    dataFormat = createMockFor(DataFormatService),
  } = {}) {
    userStore.getUserSelectedForPayment.mockReturnValue(of(user));
    userStore.getPaymentValue.mockReturnValue(of('R$ 1,00'));
    return {
      subject: new PaymentConfirmationComponent(paymentStep, userStore, paymentUsesCases, dataFormat),
      userStore
    };
  }

  it('should create instance', () => {
    const { subject } = createSubject();
    expect(subject).toBeTruthy();
  });

  it('should create form', () => {
    const { subject } = createSubject();

    subject.createForm();

    expect(subject.confirmationForm).toBeTruthy();
  });

  it('should set disabled to false', () => {
    const { subject } = createSubject();
    subject.handleValueEdition();

    expect(subject.disabled).toBeFalsy();
  });

  it('should get user data from state', () => {
    const { subject, userStore } = createSubject();

    subject.getUserDataFromState();

    expect(userStore.getUserSelectedForPayment).toHaveBeenCalled();
    expect(userStore.getPaymentValue).toHaveBeenCalled();
    expect(subject.user).toEqual(user);
  });
});
