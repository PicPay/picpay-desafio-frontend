import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { LoaderComponent } from '../loader/loader.component';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { UserPaymentComponent } from '../user-payment/user-payment.component';
import { UserComponent } from '../user/user.component';

import { ListUsersComponent } from './list-users.component';

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListUsersComponent, UserComponent, UserPaymentComponent, ModalBaseComponent, LoaderComponent],
      imports: [HttpClientModule, CurrencyMaskModule, ReactiveFormsModule],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
