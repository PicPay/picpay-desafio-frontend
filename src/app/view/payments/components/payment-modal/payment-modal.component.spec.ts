import { PaymentsUsecasesService } from 'src/app/data/usecases/payments/payments-usecases.service';
import { createMockFor } from './../../../../../../test.utils';
import { PaymentModalComponent } from './payment-modal.component';
import { PaymentStepService } from './payment-step.service';
import { of } from 'rxjs';

describe('PaymentModalComponent', () => {
  function createSubject({
    paymentStep = createMockFor(PaymentStepService),
    data = {
      id: 1001,
      name: 'Eduardo Santos',
      img: 'https://randomuser.me/api/portraits/men/9.jpg',
      username: '@eduardo.santos',
    },
    repo = createMockFor(PaymentsUsecasesService),
  } = {}) {
    repo.sendMoney.mockReturnValue(of({ res: true }));
    return {
      subject: new PaymentModalComponent(paymentStep, { user: data }, repo),
      paymentStep,
      repo
    };
  }

  it('should create instance', () => {
    const { subject } = createSubject();
    expect(subject).toBeTruthy();
  });

  it('should send payment', () => {
    const { subject, repo } = createSubject();

    subject.sendPayment({}).subscribe(res => expect(res).toBeTruthy());

    expect(repo.sendMoney).toHaveBeenCalled();
  });
});
