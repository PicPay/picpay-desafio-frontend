import { of } from 'rxjs';
import { createMockFor } from '../../../../../test.utils';
import { PaymentsRepositoryService } from '../../repositories/payments/payments-repository.service';
import { PaymentsUsecasesService } from './payments-usecases.service';


describe('PaymentsUsecasesService', () => {
  function createSubject({ paymentRepository = createMockFor(PaymentsRepositoryService) } = {}) {
    paymentRepository.insert.mockReturnValue(of([]));
    return {
      subject: new PaymentsUsecasesService(paymentRepository),
      paymentRepository,
    };
  }

  it('should create instance', () => {
    const { subject } = createSubject();
    expect(subject).toBeTruthy();
  });

  it('should get all users', () => {
    const { subject, paymentRepository } = createSubject();

    subject.sendMoney({}).subscribe((resp) => expect(resp).toBeTruthy());

    expect(paymentRepository.insert).toHaveBeenCalled();
  });
});
