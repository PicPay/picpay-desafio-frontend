import { async, TestBed } from '@angular/core/testing';
import { Payment } from '@shared/interfaces/payment';
import { PaymentStorage } from '@shared/interfaces/payment-storage';
import { PaymentStorageFilter } from '@shared/interfaces/payment-storage-filter';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService],
    });
  }));

  beforeEach(() => {
    service = TestBed.get(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test save payment', (done) => {
    const payment: Payment = {
      id: 1,
      destination_user_id: 1,
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
      value: 100,
      comment: 'Test comment',
    };

    service.savePayment(payment).subscribe((paymentStorage: PaymentStorage) => {
      expect(paymentStorage.id).toEqual(payment.id);
      expect(paymentStorage.last_card_number).toEqual('1234');
      expect(paymentStorage.destination_user_id).toEqual(payment.destination_user_id);
      expect(paymentStorage.value).toEqual(payment.value);
      expect(paymentStorage.comment).toEqual(payment.comment);
      expect(paymentStorage.date).not.toBeNull();
      done();
    });
  });

  it('test load empty payments', (done) => {
    localStorage.setItem('payments', JSON.stringify([]));

    service.loadPayments().subscribe((paymentsStorage: PaymentStorage[]) => {
      expect(paymentsStorage).toEqual([]);
      done();
    });
  });

  it('test payments without filter', (done) => {
    const payments: Payment[] = [
      {
        id: 1,
        destination_user_id: 1,
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
        value: 100,
        comment: 'Test comment 1',
      },
      {
        id: 2,
        destination_user_id: 2,
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
        value: 200,
        comment: 'Test comment 2',
      },
    ];

    localStorage.setItem('payments', JSON.stringify(payments));

    service.loadPayments().subscribe((paymentsStorage: PaymentStorage[]) => {
      expect(paymentsStorage).toEqual(payments);
      done();
    });
  });

  it('test payments with filter', (done) => {
    const filter: PaymentStorageFilter = {
      destination_user_id: 1,
    };
    const payments: Payment[] = [
      {
        id: 1,
        destination_user_id: 1,
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
        value: 100,
        comment: 'Test comment 1',
      },
      {
        id: 2,
        destination_user_id: 2,
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
        value: 200,
        comment: 'Test comment 2',
      },
    ];

    localStorage.setItem('payments', JSON.stringify(payments));

    service.loadPayments(filter).subscribe((paymentsStorage: PaymentStorage[]) => {
      expect(paymentsStorage).toEqual([payments[0]]);
      done();
    });
  });
});
