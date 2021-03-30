import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockPicPayService } from '@mocks/MockPicPayService';
import { PicPayService } from '@services/picpay.service';
import { ButtonPayModule } from '@shared/components/button-pay/button-pay.module';
import { CreditCardsModule } from '@shared/components/credit-cards/credit-cards.module';
import { PayingScreenModule } from '@shared/components/paying-screen/paying-screen.module';
import { PayingScreenService } from '@shared/components/paying-screen/paying-screen.service';
import { Payment } from '@shared/interfaces/payment';
import { NgxCurrencyModule } from 'ngx-currency';
import { of } from 'rxjs';

import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  let router: Router;
  let component: PaymentComponent;
  let picPayService: PicPayService;
  let payingScreenService: PayingScreenService;
  let fixture: ComponentFixture<PaymentComponent>;
  const longString = (length, chars) => {
    let result = '';

    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }

    return result;
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentComponent],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        CreditCardsModule,
        ButtonPayModule,
        PayingScreenModule.forRoot(),
        NgxCurrencyModule,
      ],
      providers: [
        {
          provide: PicPayService,
          useClass: MockPicPayService,
        },
        {
          provide: Router,
          useValue: {
            routerState: {
              root: {
                firstChild: {
                  params: of({ id: 1 }),
                },
              },
            },
            navigate: () => {},
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    router = TestBed.get(Router);
    picPayService = TestBed.get(PicPayService);
    payingScreenService = TestBed.get(PayingScreenService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test loaded user on init', () => {
    expect(component.user).not.toBeNull();
    expect(component.user.id).toEqual(1);
  });

  it('test loaded cards on init', () => {
    expect(component.cards.length).toEqual(2);
    expect(component.card).toEqual(component.cards[0]);
  });

  it('test amount min error', () => {
    component.payment.get('amount').setValue(0);
    expect(component.amount.errors.min).not.toBeNull();

    component.payment.get('amount').setValue(0.01);
    expect(component.amount.errors).toBeNull();
  });

  it('test amount max error', () => {
    component.payment.get('amount').setValue(99999999999);
    expect(component.amount.errors.max).not.toBeNull();

    component.payment.get('amount').setValue(99999.99);
    expect(component.amount.errors).toBeNull();
  });

  it('test comment max length error', () => {
    component.payment.get('comment').setValue(longString(100, '123456'));
    expect(component.comment.errors.maxLength).not.toBeNull();

    component.payment.get('comment').setValue(longString(50, '123456'));
    expect(component.comment.errors).toBeNull();
  });

  it('test load user with invalid user id', () => {
    jest.spyOn(router, 'navigate');

    component.loadUser(0);

    expect(router.navigate).toHaveBeenCalledWith(['/not-found']);
  });

  it('test load user with valid user id', () => {
    jest.spyOn(router, 'navigate');

    component.loadUser(2);

    expect(router.navigate).toHaveBeenCalledTimes(0);
    expect(component.user.id).toEqual(2);
  });

  it('test on change card', () => {
    component.onChangeCard(component.cards[0]);
    expect(component.card.id).toEqual(component.cards[0].id);
    expect(component.card.card_number).toEqual(component.cards[0].card_number);

    component.onChangeCard(component.cards[1]);
    expect(component.card.id).toEqual(component.cards[1].id);
    expect(component.card.card_number).toEqual(component.cards[1].card_number);
  });

  it('test on pay with min amount value', () => {
    jest.spyOn(payingScreenService, 'open');

    component.payment.get('amount').setValue(0);
    component.onPay();

    expect(payingScreenService.open).toHaveBeenCalledTimes(0);
  });

  it('test on pay with max amount value', () => {
    jest.spyOn(payingScreenService, 'open');

    component.payment.get('amount').setValue(99999999999);
    component.onPay();

    expect(payingScreenService.open).toHaveBeenCalledTimes(0);
  });

  it('test on pay with max comment length', () => {
    jest.spyOn(payingScreenService, 'open');

    component.payment.get('comment').setValue(longString(100, '123456'));
    component.onPay();

    expect(payingScreenService.open).toHaveBeenCalledTimes(0);
  });

  it('test on pay with valid data', () => {
    jest.spyOn(payingScreenService, 'open');
    jest.spyOn(payingScreenService, 'close');
    jest.spyOn(picPayService, 'payment');

    component.payment.get('amount').setValue(100);
    component.payment.get('comment').setValue('Comment Test');

    const payment: Payment = {
      card_number: component.card.card_number,
      cvv: component.card.cvv,
      expiry_date: component.card.expiry_date,
      destination_user_id: component.user.id,
      value: 100,
      comment: 'Comment Test',
    };

    component.onPay();

    expect(payingScreenService.open).toHaveBeenCalledTimes(1);
    expect(picPayService.payment).toHaveBeenCalledWith(payment);
    expect(payingScreenService.close).toHaveBeenCalledTimes(1);
  });
});
