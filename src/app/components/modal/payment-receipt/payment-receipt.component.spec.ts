import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { By } from '@angular/platform-browser';
import { TransactionResponse } from '@app/models/transactionResponse/transaction-response.model';

import { PaymentReceiptComponent } from '@components/modal/payment-receipt/payment-receipt.component';

describe('PaymentReceiptComponent', () => {
  let component: PaymentReceiptComponent;
  let fixture: ComponentFixture<PaymentReceiptComponent>;

  let closeButton: HTMLButtonElement;
  let confirmationButton: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentReceiptComponent ],
      imports: [
        HttpClientModule,
        MatDialogModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { transaction: {} as TransactionResponse }},
        { provide: MatDialogRef, useValue: {} }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentReceiptComponent);
    closeButton = fixture.debugElement.query(By.css('.modal__title > button')).nativeElement;
    confirmationButton = fixture.debugElement.query(By.css('.modal__content > button')).nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Close button should close the modal on click', fakeAsync(() => {
    const closeModalSpy = spyOn(component, 'closeModal');

    closeButton.click();
    fixture.detectChanges();
    tick();

    expect(closeModalSpy).toHaveBeenCalled();
  }));

  it('Confirmation button should close the modal on click', fakeAsync(() => {
    const closeModalSpy = spyOn(component, 'closeModal');

    confirmationButton.click();
    fixture.detectChanges();
    tick();

    expect(closeModalSpy).toHaveBeenCalled();
  }));
});
