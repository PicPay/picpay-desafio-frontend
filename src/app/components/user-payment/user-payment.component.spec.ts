import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ModalBaseComponent } from '../modal-base/modal-base.component';

import { UserPaymentComponent } from './user-payment.component';

describe('UserPaymentComponent', () => {
  let component: UserPaymentComponent;
  let fixture: ComponentFixture<UserPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaymentComponent, ModalBaseComponent ],
      imports: [ CurrencyMaskModule, NgbModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
