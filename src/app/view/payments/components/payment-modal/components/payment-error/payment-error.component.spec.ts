import { MatDialogRef } from '@angular/material/dialog';
import { createMockFor } from '../../../../../../../../test.utils';
import { PaymentErrorComponent } from './payment-error.component';
import { PaymentModalComponent } from '../../payment-modal.component';
import { DialogService } from 'src/app/data/utils/dialog.service';

describe('PaymentErrorComponent', () => {
  function createSubject({ matDialogRef = createMockFor(MatDialogRef) } = {}) {
    return {
      subject: new PaymentErrorComponent(matDialogRef),
      matDialogRef,
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
});
