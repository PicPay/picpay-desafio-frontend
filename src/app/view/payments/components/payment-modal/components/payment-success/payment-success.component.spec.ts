import { DialogService } from 'src/app/data/utils/dialog.service';
import { createMockFor } from '../../../../../../../../test.utils';
import { UserStateService } from '../../user-state.service';
import { PaymentSuccessComponent } from './payment-success.component';
import { of } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

describe('PaymentSuccessComponent', () => {
  function createSubject({
    matDialogRef = createMockFor(MatDialogRef),
    userState = createMockFor(UserStateService),
  } = {}) {
    userState.getPaymentValue.mockReturnValue('R$ 1,00');
    userState.getUserSelectedForPayment.mockReturnValue(
      of('R$ 1,00')
    );
    return {
      subject: new PaymentSuccessComponent(matDialogRef, userState),
      matDialogRef,
      userState,
    };
  }

  it('should create instance', () => {
    const { subject } = createSubject();
    expect(subject).toBeTruthy();
  });

  it('should call closeAll modals', () => {
    const { subject, matDialogRef } = createSubject();
    subject.closeModal();

    expect(matDialogRef.close).toHaveBeenCalled();
  });

  it('should get payment information', () => {
    const user = {
      id: 112,
      name: 'Flávio',
      img: 'img',
      username: '@flavio',
    };

    const { subject, userState } = createSubject();
    subject.getPaymentStateData();

    expect(userState.getPaymentValue).toHaveBeenCalled();
  });

  it('should get user information', () => {
    const user = {
      id: 112,
      name: 'Flávio',
      img: 'img',
      username: '@flavio',
    };

    const { subject, userState } = createSubject();
    subject.getUserSelected().subscribe(resp => expect(resp).toEqual(user));

    expect(userState.getUserSelectedForPayment).toHaveBeenCalled();
  });

  it('should get information on init', () => {
    const { subject, userState } = createSubject();
    subject.ngOnInit();

    expect(userState.getUserSelectedForPayment).toHaveBeenCalled()
    expect(userState.getPaymentValue).toHaveBeenCalled()
  })



});
