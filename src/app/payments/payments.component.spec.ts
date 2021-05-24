import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import Contact from './interfaces/contact.interface';
import { FlagsCard } from './modal-payment/interfaces/card.interface';
import { TransactionPayload } from './modal-payment/interfaces/transaction.interface';

import { PaymentsComponent } from './payments.component';
import { PaymentsModule } from './payments.module';

describe(PaymentsComponent.name, () => {
  let component: PaymentsComponent;
  let fixture: ComponentFixture<PaymentsComponent>;

  beforeEach(( async () => {
    TestBed.configureTestingModule({
      imports: [
        PaymentsModule
      ],
    })
      .compileComponents();
    fixture = TestBed.createComponent(PaymentsComponent);
  }));

  it('should create component', () => {
    const instanceComponent = fixture.componentInstance;
    expect(instanceComponent).toBeTruthy();
  });

  it('should load contacts', () => {
    const instanceComponent = fixture.componentInstance;
    const contacts: Contact[] = [{ id: 1, name: "Mateus Queiroz", username: "@matequeiroz", img: "https://randomuser.me/api/portraits/women/50.jpg" }]
    instanceComponent.contacts = contacts;
    fixture.detectChanges();
    expect(instanceComponent.contacts).toBe(contacts)
  })

  it('should open the payment modal with the selected contact receveid', () => {
    const instanceComponent = fixture.componentInstance;
    const contactReceived: Contact = { id: 1, name: "Mateus Queiroz", username: "@matequeiroz", img: "https://randomuser.me/api/portraits/women/50.jpg" }
    instanceComponent.handleOpenModalPayment(contactReceived);
    fixture.detectChanges();
    expect(instanceComponent.contactReceiving).toBe(contactReceived);
    expect(instanceComponent.openModalPayment).toEqual(true)
  })

  it('should close the payment modal', () => {
    const instanceComponent = fixture.componentInstance;
    instanceComponent.handleCloseModalPayment(null)
    fixture.detectChanges();
    expect(instanceComponent.openModalPayment).toEqual(false)
  })

  it('should close the payment modal success', () => {
    const instanceComponent = fixture.componentInstance;
    instanceComponent.handleCloseModalPaymentSuccess(null)
    fixture.detectChanges();
    expect(instanceComponent.openModalSuccessPayment).toEqual(false)
  })

  it('should close the payment method, pass the transaction data and open the success mode', () => {
    const instanceComponent = fixture.componentInstance;
    const contactReceived: Contact = { id: 1, name: "Mateus Queiroz", username: "@matequeiroz", img: "https://randomuser.me/api/portraits/women/50.jpg" }
    const dataTransaction: TransactionPayload = { 
      card: { card_number: "111111111111", cvv: 123, expiry_date: '12/2022', flag_card: FlagsCard.mastercard },
      contact: contactReceived,
      isSuccess: true,
      value: 199
    }
    instanceComponent.handlePaymentStatus(dataTransaction);
    fixture.detectChanges();
    expect(instanceComponent.openModalPayment).toEqual(false);
    expect(instanceComponent.paymentData).toEqual(dataTransaction);
    expect(instanceComponent.openModalSuccessPayment).toEqual(true);
  })
});
