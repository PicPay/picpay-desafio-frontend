import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentsModule } from '../payments.module';

import { ModalPaymentResultTransactionComponent } from './modal-payment-result-transaction.component';

describe('ModalPaymentResultTransactionComponent', () => {
  let component: ModalPaymentResultTransactionComponent;
  let fixture: ComponentFixture<ModalPaymentResultTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PaymentsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPaymentResultTransactionComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should close modal result payment and emit this event', () => {
    const instanceComponent = fixture.componentInstance;
    spyOn(instanceComponent.closeModal, 'emit');
    fixture.detectChanges();
    instanceComponent.handleCloseModal()
    expect(instanceComponent.closeModal.emit).toHaveBeenCalled();
  })
});
