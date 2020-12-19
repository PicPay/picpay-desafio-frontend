import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog } from '@angular/material';
import { of } from 'rxjs';

import { PaymentsComponent } from './payments.component';
import { SharedModule } from '@shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { PaymentsService } from './shared/payments.service';
import { User } from '@core/model/user';
import { CreditCard } from '@core/model/credit-card';
import { PaymentForm } from '@shared/components/payment-form/payment-form';
import { CreditCardService } from '@core/services/credit-card.service';
import { PaymentFormComponent } from '@shared/components/payment-form/payment-form.component';

export class MatDialogMock {
  open() {
    return {
      afterClosed: () => of({})
    };
  }
}

describe('PaymentsComponent', () => {
  let component: PaymentsComponent;
  let fixture: ComponentFixture<PaymentsComponent>;
  let paymentsService: PaymentsService;
  let creditCardService: CreditCardService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedModule
      ],
      declarations: [
        PaymentsComponent,
        UserListComponent 
      ],
      providers: [
        { 
          provide: MatDialog,
          useClass: MatDialogMock 
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsComponent);
    component = fixture.componentInstance;
    paymentsService = TestBed.get(PaymentsService);
    creditCardService = TestBed.get(CreditCardService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open payment form', () => {
    const user: User = {
      id: 1,
      name: 'string',
      img: 'string',
      username: 'string'
    };

    const creditCard: CreditCard = {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    }

    const paymentForm: PaymentForm = {
      user,
      creditCards: [creditCard]
    }
    
    const spyDialog = spyOn(component.dialog, 'open').and.callThrough();
    spyOn(creditCardService, 'getCards').and.returnValue([creditCard]);

    component.openPaymentForm(user);

    expect(spyDialog).toHaveBeenCalledWith(PaymentFormComponent, {data: paymentForm});
  });
});
