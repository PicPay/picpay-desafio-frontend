import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockPicPayService } from '@mocks/MockPicPayService';
import { PicPayService } from '@services/picpay.service';
import { CardPaymentModule } from '@shared/components/card-payment/card-payment.module';
import { of } from 'rxjs';

import { PaymentsComponent } from './payments.component';

describe('PaymentsComponent', () => {
  let component: PaymentsComponent;
  let fixture: ComponentFixture<PaymentsComponent>;

  const configureModule = (routerParams = {}) => {
    TestBed.configureTestingModule({
      declarations: [PaymentsComponent],
      imports: [RouterTestingModule, CardPaymentModule],
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
                  params: of(routerParams),
                },
              },
            },
          },
        },
      ],
    }).compileComponents();
  };

  const createComponent = () => {
    fixture = TestBed.createComponent(PaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  describe('PaymentsComponent without user param', () => {
    beforeEach(() => {
      configureModule();
    });

    beforeEach(() => {
      createComponent();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('test if it is not full page', () => {
      expect(component.isFullPage).toBeTruthy();
    });
  });

  describe('PaymentsComponent with user param', () => {
    beforeEach(() => {
      configureModule({ id: 1 });
    });

    beforeEach(() => {
      createComponent();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('test if it is full page', () => {
      expect(component.isFullPage).toBeFalsy();
    });
  });
});
