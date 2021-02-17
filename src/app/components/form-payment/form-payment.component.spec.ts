import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';
import { Last4DigitsPipe } from '../../pipes/card.pipe';

import { FormPaymentComponent } from './form-payment.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardService } from '../../services/card.service';
import { ModalRef } from '../../modal-ref';
import { Card } from 'src/app/models/card.interface';
import { of } from 'rxjs';
import { CurrencyMaskModule } from 'ng2-currency-mask';

describe('FormPaymentComponent', () => {
  let component: FormPaymentComponent;
  let fixture: ComponentFixture<FormPaymentComponent>;
  let cardService: CardService;

  const mockModalRef = { close: () => false };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormPaymentComponent,
        Last4DigitsPipe,
      ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        CurrencyMaskModule,
      ],
      providers: [
        PaymentService,
        CardService,
        {
          provide: ModalRef,
          useValue: mockModalRef,
        },
      ],
    })
    .compileComponents();

    cardService = new CardService();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const MOCK_CARDS: Card[] = [
      {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
      },
      {
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
      },
    ];
    spyOn(cardService, 'getCards').and.returnValue(of(MOCK_CARDS));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
