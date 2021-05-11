import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { User } from 'src/app/models/user';
import { LoaderComponent } from '../loader/loader.component';
import { ModalBaseComponent } from '../modal-base/modal-base.component';

import { UserPaymentComponent } from './user-payment.component';

const user: User = {
  id: 1001,
  img: 'https://randomuser.me/api/portraits/men/9.jpg',
  name: 'Eduardo Santos',
  username: '@eduardo.santos'
};

const validCard = {
  card_number: '1111111111111111',
  cvv: 789,
  expiry_date: '01/18',
  brand: 'visa',
  checked: false
};

const invalidCard = {
  card_number: '4111111111111234',
  cvv: 123,
  expiry_date: '01/20',
  brand: 'mastercard',
  checked: false
};

describe('UserPaymentComponent', () => {
  let component: UserPaymentComponent;
  let fixture: ComponentFixture<UserPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserPaymentComponent, ModalBaseComponent, LoaderComponent],
      imports: [CurrencyMaskModule, NgbModule, ReactiveFormsModule, HttpClientModule],
      providers: [
        NgbModal, NgbActiveModal
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaymentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.user = user;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should return last 4 digits of a card', () => {
    expect(component.getLastDigits(validCard).length).toBe(4);
  });

  it('should create a transaction object', () => {
    component.user = user;
    fixture.detectChanges();

    const transactionObj = component.createTransactionObject(validCard, 100);
    expect(transactionObj).toBeTruthy();
  });

  it('should be invalid, if a invlalid card is inserted', () => {
    const validationResult = component.validate(invalidCard, 10);
    expect(validationResult.valid).toBeFalsy();
  });

  it('should be invalid, if the payment value is lesser or equal 0', () => {
    const validationResult = component.validate(validCard, -10);
    expect(validationResult.valid).toBeFalsy();
  });

  it('should be invalid, if there is no card', () => {
    const validationResult = component.validate(null, 100);
    expect(validationResult.valid).toBeFalsy();
  });

  it('should be valid, if there is a valid card and the payment value is greater than 0', () => {
    const validationResult = component.validate(validCard, 1);
    expect(validationResult).toBeTruthy();
  });
});
