import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  CreditCard,
  failPaymentTransactionResultMock,
  successPaymentTransactionResultMock,
  User,
  userOneMock,
  validCreditCardMock,
} from '@picpay-lib/ngx-domain';
import { UserPaymentService } from '@picpay-lib/ngx-service';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { of, throwError } from 'rxjs';

import { NgxPaymentResultModule } from '../ngx-payment-result';
import { NgxPayToUserComponent } from './ngx-pay-to-user.component';

describe('NgxPayToUserComponent', () => {
  let component: NgxPayToUserComponent;
  let fixture: ComponentFixture<NgxPayToUserComponent>;
  let userPaymentService: UserPaymentService;

  const oneUser: User = new User(userOneMock);
  const dialogRefStub = { close: () => false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxPayToUserComponent],
      imports: [
        HttpClientTestingModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        NgxPaymentResultModule,
        CurrencyMaskModule,
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: { ...dialogRefStub },
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: oneUser,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPayToUserComponent);
    component = fixture.componentInstance;
    userPaymentService = TestBed.inject(UserPaymentService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not trigger pay with an invalid form', () => {
    const paySpy = spyOn(component, 'pay');
    fixture.debugElement.query(By.css('mat-dialog-actions button')).nativeElement.click();
    expect(paySpy).not.toHaveBeenCalled();
  });

  it('should not send money to user with an invalid form', () => {
    const paymentSpy = spyOn(userPaymentService, 'sendMoneyToUser');
    component.pay();
    expect(paymentSpy).not.toHaveBeenCalled();
  });

  it('should trigger pay with a valid form', () => {
    const paySpy = spyOn(component, 'pay');

    component.form.get('amount')?.setValue(10);
    component.form.get('cardNumber')?.setValue(validCreditCardMock.cardNumber);
    fixture.detectChanges();

    fixture.debugElement.query(By.css('mat-dialog-actions button')).nativeElement.click();

    expect(paySpy).toHaveBeenCalled();
  });

  it('should not send money to user with an invalid credit card number', () => {
    const paymentSpy = spyOn(userPaymentService, 'sendMoneyToUser');
    component.form.get('amount')?.setValue(10);
    component.form.get('cardNumber')?.setValue('1');
    fixture.detectChanges();

    fixture.debugElement.query(By.css('mat-dialog-actions button')).nativeElement.click();
    expect(paymentSpy).not.toHaveBeenCalled();
  });

  it('should pay an user with success', () => {
    const dialogRefSpy = spyOn(component.dialogRef, 'close');
    const paymentSpy = spyOn(userPaymentService, 'sendMoneyToUser').and.returnValue(
      of(successPaymentTransactionResultMock)
    );

    component.form.get('amount')?.setValue(10);
    component.form.get('cardNumber')?.setValue(validCreditCardMock.cardNumber);
    fixture.detectChanges();

    fixture.debugElement.query(By.css('mat-dialog-actions button')).nativeElement.click();
    const creditCard = new CreditCard(validCreditCardMock);
    expect(paymentSpy).toHaveBeenCalledWith(component.user, creditCard, 10);
    expect(dialogRefSpy).toHaveBeenCalledWith(successPaymentTransactionResultMock);
  });

  it('should pay an user with error', () => {
    const dialogRefSpy = spyOn(component.dialogRef, 'close');
    const paymentSpy = spyOn(userPaymentService, 'sendMoneyToUser').and.returnValue(throwError({ status: 404 }));

    component.form.get('amount')?.setValue(10);
    component.form.get('cardNumber')?.setValue(validCreditCardMock.cardNumber);
    fixture.detectChanges();

    fixture.debugElement.query(By.css('mat-dialog-actions button')).nativeElement.click();
    const creditCard = new CreditCard(validCreditCardMock);
    expect(paymentSpy).toHaveBeenCalledWith(component.user, creditCard, 10);
    expect(dialogRefSpy).toHaveBeenCalledWith(failPaymentTransactionResultMock);
  });
});
