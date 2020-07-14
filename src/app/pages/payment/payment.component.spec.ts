import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentComponent } from './payment.component';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { PaymentFormComponent } from '../../components/payment-form/payment-form.component';
import { ButtonCommonComponent } from '../../components/button-common/button-common.component';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { HideCardPipePipe } from '../../pipes/hide-card-pipe.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PaymentComponent,
        UserCardComponent,
        ModalComponent,
        SpinnerComponent,
        PaymentFormComponent,
        ButtonCommonComponent,
        AvatarComponent,
        HideCardPipePipe,
      ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        NgxCurrencyModule,
        HttpClientTestingModule,
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

  it('should request for users if we dont have any yet', () => {
    const spy = jest.spyOn(component, 'getUsers');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should open modal when trigger payClickHandler', () => {
    const payload = {
      id: 1,
      name: 'aa',
      img: 'teste',
      username: 'haha',
    };

    const spy = jest.spyOn(component, 'payClickHandler');
    component.payClickHandler(payload);

    expect(spy).toHaveBeenCalledWith(payload);
    expect(component.showPaymentModal).toBe(true);
    expect(component.user).toBe(payload);
  });

  it('should show feedback modal on trigger paymentSubmitCallback', () => {
    const payload = {
      status: 'teste',
      success: true,
    };

    const spy = jest.spyOn(component, 'paymentSubmitCallback');
    component.paymentSubmitCallback(payload);

    expect(spy).toHaveBeenCalledWith(payload);
    expect(component.showPaymentModal).toBe(false);
    expect(component.showFeedbackModal).toBe(true);
  });

  it('should hide modal feedback when click on close', () => {
    const spy = jest.spyOn(component, 'paymentFormHandleClose');
    component.paymentFormHandleClose();

    expect(spy).toHaveBeenCalled();
    expect(component.showFeedbackModal).toBe(false);
  });
});
