import { MatSnackBar } from '@angular/material/snack-bar';
import { MaskNumber } from './../card/card.pipe';
import { Checkout } from './checkout.model';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';

import { CheckoutService } from './checkout.service';
import { Router } from '@angular/router';
import { Overlay } from '@angular/cdk/overlay';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CheckoutService', () => {
  let service: CheckoutService;
  let checkout: Checkout;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MaskNumber
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule],
      providers: [
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        },
        MatSnackBar,
        Overlay
      ]
    });

    service = TestBed.get(CheckoutService);

    checkout = {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
      destination_user_id: 1,
      value: 20.5
    };
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve realizar o pagamento', async(() => {
    service.create(checkout).subscribe(() => {
      expect(true).toEqual(true);
    });
  }));
});
