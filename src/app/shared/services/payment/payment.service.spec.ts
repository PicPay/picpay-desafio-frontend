import {TestBed} from '@angular/core/testing';
import {MatDialog, MatDialogRef} from '@angular/material';
import {of} from 'rxjs';
import {PaymentDialogComponent} from '../../components/payment-dialog/payment-dialog.component';
import {PaymentResultDialogComponent} from '../../components/payment-result-dialog/payment-result-dialog.component';
import {CreditCard} from '../../models/credit-card.model';
import {TransactionPayload} from '../../models/transaction-payload.model';
import {TransactionResponse} from '../../models/transaction-response.model';
import {User} from '../../models/user.model';
import {TransactionService} from '../transaction/transaction.service';

import {PaymentService} from './payment.service';

describe('PaymentService', () => {
  let matDialogSpy: jasmine.SpyObj<MatDialog>;
  let transactionServiceSpy: jasmine.SpyObj<TransactionService>;
  let paymentService: PaymentService;

  const testUser: User = {
    id: 0,
    name: 'Test User',
    username: '@test-user',
    img: 'test-image-path',
  };

  const testCards: CreditCard[] = [
    {
      // valid card
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    {
      // invalid card
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  const testPayload: TransactionPayload = {
    card_number: '1111111111111111',
    cvv: 789,
    expiry_date: '01/18',
    destination_user_id: 1001,
    value: 132,
  };

  beforeEach(() => {
    matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    transactionServiceSpy = jasmine.createSpyObj('TransactionService', [
      'getCards',
      'doTransaction',
    ]);

    transactionServiceSpy.getCards.and.returnValue(of(testCards));

    TestBed.configureTestingModule({
      providers: [
        { provide: MatDialog, useValue: matDialogSpy },
        { provide: TransactionService, useValue: transactionServiceSpy },
      ],
    });

    paymentService = TestBed.get(PaymentService);
  });

  it('should be created', () => {
    expect(paymentService).toBeTruthy();
  });

  it('#startPayment should call TransactionService#getCards', () => {
    matDialogSpy.open.and.returnValue({
      afterClosed() {
        return of(undefined);
      },
    } as MatDialogRef<PaymentDialogComponent, TransactionPayload>);

    paymentService.startPayment(testUser);

    expect(transactionServiceSpy.getCards.calls.count()).toBe(1, 'one call');
  });

  it('#startPayment should open an Payment Dialog', () => {
    matDialogSpy.open.and.returnValue({
      afterClosed() {
        return of(undefined);
      },
    } as MatDialogRef<PaymentDialogComponent, TransactionPayload>);

    paymentService.startPayment(testUser);

    expect(matDialogSpy.open).toHaveBeenCalledWith(
      PaymentDialogComponent,
      jasmine.objectContaining({
        data: {
          receiver: testUser,
          cards: testCards,
        },
      })
    );
  });

  it('#startPayment should call TransactionService#doTransaction if the Payment Dialog returns a payload', () => {
    matDialogSpy.open.and.returnValue({
      afterClosed() {
        return of(testPayload);
      },
    } as MatDialogRef<PaymentDialogComponent, TransactionPayload>);

    paymentService.startPayment(testUser);

    expect(transactionServiceSpy.doTransaction.calls.count()).toBe(
      1,
      'one call'
    );
  });

  it('#startPayment should not call TransactionService#doTransaction if the PaymentDialog does not return a payload', () => {
    matDialogSpy.open.and.returnValue({
      afterClosed() {
        return of(undefined);
      },
    } as MatDialogRef<PaymentDialogComponent, TransactionPayload>);

    paymentService.startPayment(testUser);

    expect(transactionServiceSpy.doTransaction.calls.count()).toBe(
      0,
      'no calls'
    );
  });

  it('#startPayment should open a Payment Result Dialog after calling TransactionService#doTransaction', () => {
    matDialogSpy.open.and.returnValue({
      afterClosed() {
        return of(testPayload);
      },
    } as MatDialogRef<PaymentDialogComponent, TransactionPayload>);

    const testResponseSuccess: TransactionResponse = {
      success: true,
      status: 'Aprovada',
    };

    transactionServiceSpy.doTransaction.and.returnValue(
      of(testResponseSuccess)
    );

    paymentService.startPayment(testUser);

    expect(matDialogSpy.open).toHaveBeenCalledWith(
      PaymentResultDialogComponent,
      jasmine.objectContaining({
        data: { success: testResponseSuccess.success },
      })
    );

    const testResponseFailure: TransactionResponse = {
      success: false,
      status: 'Negada',
    };

    transactionServiceSpy.doTransaction.and.returnValue(
      of(testResponseFailure)
    );

    paymentService.startPayment(testUser);

    expect(matDialogSpy.open).toHaveBeenCalledWith(
      PaymentResultDialogComponent,
      jasmine.objectContaining({
        data: { success: testResponseFailure.success },
      })
    );
  });
});
