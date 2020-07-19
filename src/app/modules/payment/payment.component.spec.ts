import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentComponent } from './payment.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule],
      providers: [
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        }
      ]
    });

    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
  });

  it('deve criar', () => {
    expect(component).toBeDefined();
  });
});
