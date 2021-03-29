import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockPicPayService } from '@mocks/MockPicPayService';
import { PicPayService } from '@services/picpay.service';
import { ButtonPayModule } from '@shared/components/button-pay/button-pay.module';
import { CreditCardsModule } from '@shared/components/credit-cards/credit-cards.module';
import { PayingScreenModule } from '@shared/components/paying-screen/paying-screen.module';
import { NgxCurrencyModule } from 'ngx-currency';
import { of } from 'rxjs';

import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

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
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
