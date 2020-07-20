import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentComponent } from './payment.component';
import { DebugElement } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ErrorsInputModule } from '../errors-input/errors-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaskCard } from 'src/app/pipes/mask-card.pipe';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CurrencyMaskModule } from 'ng2-currency-mask';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentComponent, SpinnerComponent, MaskCard],
      imports: [ErrorsInputModule, ReactiveFormsModule, CurrencyMaskModule],
      providers: [
        BsModalRef,
        BsModalService,
        ComponentLoaderFactory,
        PositioningService,
        HttpClient,
        HttpHandler,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
