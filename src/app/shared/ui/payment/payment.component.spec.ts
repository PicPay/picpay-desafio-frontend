
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/http.service';
import { HomeService } from 'src/app/modules/services/home.service';
import { INVALID_CARD, VALID_CARD } from 'src/app/utils/constants';
import { httpServiceStub } from 'src/mock/tests/http-service';
import { MatDialogMock } from 'src/mock/tests/mat-dialog-stub';
import { usersStub } from 'src/mock/tests/users-stub';
import { SharedModule } from '../../shared.module';

import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;
  let transactionValue: AbstractControl;
  let card: AbstractControl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientModule, BrowserAnimationsModule],
      providers: [
        HomeService,
        {provide: MatDialogRef, useValue:{}},
        MatSnackBar,
        FormBuilder,
        {provide: HttpService, useValue: httpServiceStub}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    component.user = {
      id: 1,
      img: '',
      username: '',
      name: '',
    };
    fixture.detectChanges();
    transactionValue = component.paymentForm.controls['cash'];
    card = component.paymentForm.controls['card'];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getSelected user from service', () => {
    const getSelectedUser = jest.spyOn(component.homeService, 'getSelectedUser').mockReturnValue(of(usersStub[0]));
    component.ngOnInit();
    expect(getSelectedUser).toHaveBeenCalledTimes(1);
    expect(component.user).toBe(usersStub[0]);
  });

  it('should be filled value input with wrong values', () => {
    let errors = {};
    card.setValue(VALID_CARD);
    expect(transactionValue.valid).toBeFalsy();

    // empty value scenary
    errors = transactionValue.errors || {};
    expect(errors['required']).toBeTruthy();

    // wrong value scenary
    transactionValue.setValue('aaaaa');
    errors = transactionValue.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    // correct value scenary
    transactionValue.setValue(222.22);
    errors = transactionValue.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
    expect(component.paymentForm.valid).toBeTruthy();
  });

  it('should be filled card select with empty value', () => {
    let errors = {};

    transactionValue.setValue(222.22);

    // empty card scenary
    errors = card.errors || {};
    expect(errors['required']).toBeTruthy();

    // correct card scenary
    card.setValue(VALID_CARD);
    errors = card.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(component.paymentForm.valid).toBeTruthy();
  });

  it('should call payment service whith a valid card', () => {
    const paymentButton = fixture.debugElement.query(By.css('.payment-button'));
    transactionValue.setValue(222.22);
    card.setValue(VALID_CARD);

    expect(component.paymentForm.valid).toBeTruthy();
    
    const handlePayment = jest.spyOn(component.homeService, 'submitPayment').mockReturnValue(of(true))
    const handleResponse = jest.spyOn(component, 'handleResponse').mockImplementation();
    
    paymentButton.triggerEventHandler('click', handlePayment);

    expect(handlePayment).toHaveBeenCalledTimes(1)
    expect(handleResponse).toHaveBeenCalledTimes(1)
  });

});

