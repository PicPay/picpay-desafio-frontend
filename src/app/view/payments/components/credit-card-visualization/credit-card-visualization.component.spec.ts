import { MatDialog } from '@angular/material/dialog';
import { createMockFor } from '../../../../../../test.utils';
import { CreditCardVisualizationComponent } from './credit-card-visualization.component';


describe('CreditCardVisualizationComponent', () => {
  function createSubject({
    dialog = createMockFor(MatDialog),
  } = {}) {
    return {
      subject: new CreditCardVisualizationComponent({
        card: {card_number: '231211212',
        cvv: 23,
        expiry_date: '2123121'}
      }),
      dialog,
    };
  }

  it('should create instance', () => {
    const { subject } = createSubject();
    expect(subject).toBeTruthy();
  });
});
