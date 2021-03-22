import { Location } from '@angular/common';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  MatButton,
  MatDialogRef,
  MatFormFieldModule,
  MatIconModule,
  MatInput,
  MatInputModule,
  MatSelect,
  MatSelectModule,
  MAT_DIALOG_DATA,
} from '@angular/material';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { userInfo } from 'os';
import { CreditCard } from '../../models/credit-card.model';
import { TransactionPayload } from '../../models/transaction-payload.model';
import { TransactionResponse } from '../../models/transaction-response.model';
import { User } from '../../models/user.model';

import { PaymentDialogComponent } from './payment-dialog.component';

describe('PaymentDialogComponent', () => {
  let matDialogRefSpy: jasmine.SpyObj<
    MatDialogRef<PaymentDialogComponent, TransactionPayload>
  >;
  let component: PaymentDialogComponent;
  let fixture: ComponentFixture<PaymentDialogComponent>;

  const testUser: User = {
    id: 0,
    name: 'Test User',
    username: '@test-user',
    img: 'test-image-path',
  };

  const testCards: CreditCard[] = [
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
  ];

  beforeEach(async(() => {
    matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatIconModule,
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            receiver: testUser,
            cards: testCards,
          },
        },
        { provide: MatDialogRef, useValue: matDialogRefSpy },
      ],
      declarations: [PaymentDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display receiver info', () => {
    const nameElement: HTMLElement = fixture.nativeElement.querySelector(
      '.user-name'
    );
    console.log(fixture.nativeElement);

    expect(nameElement.textContent.trim()).toBe(
      testUser.name.trim(),
      'name of the user'
    );

    const usernameElement: HTMLElement = fixture.nativeElement.querySelector(
      '.user-username'
    );
    expect(usernameElement.textContent.trim()).toBe(
      testUser.username.trim(),
      'username of the user'
    );

    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector(
      '.user-img'
    );
    const imgFullUrl = Location.joinWithSlash(
      window.location.origin,
      testUser.img.trim()
    );
    expect(imgElement.src.trim()).toBe(imgFullUrl, 'user image url');
  });

  it('should test form validation', () => {
    expect(component.paymentForm.valid).toBeFalsy();
    expect(component.ammountField.valid).toBeFalsy();
    expect(component.cardField.valid).toBeFalsy();

    component.ammountField.setValue(0);

    expect(component.paymentForm.valid).toBeFalsy();
    expect(component.ammountField.valid).toBeFalsy();
    expect(component.cardField.valid).toBeFalsy();

    component.ammountField.setValue(10);

    expect(component.paymentForm.valid).toBeFalsy();
    expect(component.ammountField.valid).toBeTruthy();
    expect(component.cardField.valid).toBeFalsy();

    component.cardField.patchValue(testCards[0]);

    expect(component.paymentForm.valid).toBeTruthy();
    expect(component.ammountField.valid).toBeTruthy();
    expect(component.cardField.valid).toBeTruthy();
  });

  it('pay button should be disabled when the form is invalid', () => {
    component.ammountField.patchValue(undefined);
    component.paymentForm.updateValueAndValidity();

    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector(
      '.submit-button'
    );

    expect(button.disabled).toBeTruthy('button disabled');
  });

  it('pay button should be enabled when the form is valid', () => {
    component.ammountField.patchValue(10);
    component.cardField.patchValue(testCards[0]);
    component.paymentForm.updateValueAndValidity();

    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector(
      '.submit-button'
    );

    expect(button.disabled).toBeFalsy('button enabled');
  });

  it('should close emitting a TransactionPayload when the pay button is clicked', () => {
    const expectedPayload: TransactionPayload = {
      card_number: testCards[0].card_number,
      cvv: testCards[0].cvv,
      expiry_date: testCards[0].expiry_date,
      destination_user_id: testUser.id,
      value: 10,
    };

    component.ammountField.patchValue(expectedPayload.value);
    component.cardField.patchValue(testCards[0]);

    expect(component.paymentForm.valid).toBeTruthy();

    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector(
      '.submit-button'
    );

    button.click();

    expect(button.disabled).toBeFalsy('button enabled');
    expect(matDialogRefSpy.close.calls.count()).toBe(1, 'one call');
    expect(matDialogRefSpy.close).toHaveBeenCalledWith(expectedPayload);
  });
});
