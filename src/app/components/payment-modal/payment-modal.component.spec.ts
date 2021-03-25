import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { spyOnClass } from 'jasmine-es6-spies';
import { NgxCurrencyModule } from 'ngx-currency';
import { of } from 'rxjs';
import { CardModel } from 'src/app/models/card-model';
import { ModalRef } from 'src/app/models/modal-ref';
import { UserModel } from 'src/app/models/user-model';
import { CardService } from 'src/app/services/card.service';
import { PaymentService } from 'src/app/services/payment.service';

import { PaymentModalComponent } from './payment-modal.component';

describe('PaymentModalComponent', () => {
  let component: PaymentModalComponent;
  let fixture: ComponentFixture<PaymentModalComponent>;
  let cardService: jasmine.SpyObj<CardService>;
  let paymentService: jasmine.SpyObj<PaymentService>;
  let cards: CardModel[];
  let card: CardModel;
  let value: number = 123;
  let user: UserModel = {
    id: 1,
    name: 'Flavio Lopes Duarte',
    username: 'duarte.flavio',
    img: 'https://randomuser.me/api/portraits/men/9.jpg'
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentModalComponent ],
      imports: [
        NgxCurrencyModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: CardService, useFactory: () => spyOnClass(CardService) },
        { provide: PaymentService, useFactory: () => spyOnClass(PaymentService) },
        { provide: ModalRef, useValue: { hide: () => {} } },
        { provide: 'MODAL_DATA', useValue: user }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentModalComponent);
    cardService = TestBed.get(CardService);
    paymentService = TestBed.get(PaymentService);
    component = fixture.componentInstance;

    cards = [
      {
        cardNumber: '1111111111111111',
        cvv: 789,
        expiryDate: '01/18'
      },
      {
        cardNumber: '4111111111111234',
        cvv: 123,
        expiryDate: '01/20'
      }
    ];

    card = cards[0];
    component.paymentForm.setValue({ 
        'value': value,
        'card': card.cardNumber
    });
    cardService.getCards$.and.returnValue(of(cards));
    paymentService.pay$.and.returnValue(of({success: true, status: 'Aprovada'}))

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call CardService.getCards$ when component starts', () => {
    expect(cardService.getCards$).toHaveBeenCalled();
  });

  it('should populate cards with CardService.getCards$ result', () => {
    const spy = jasmine.createSpy('spy');

    cardService.getCards$().subscribe(spy);
    
    expect(spy).toHaveBeenCalledWith(component.cards);
  });

  it('should render cards as options', () => {
    const options = fixture.nativeElement.querySelectorAll('.cards option');

    expect(options.length).toBe(cards.length);
  });

  it('should render value with mask', () => {
    const value = fixture.nativeElement.querySelector('.value');
    
    expect(value.value).toContain('R$ 123,00');
  });

  it('should disable "Pagar" button when form is invalid', () => {
    component.paymentForm.setValue({ 
        'value': null,
        'card': null
    });
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.pay-button');
    
    expect(button.disabled).toBeTruthy();
  });

  it('should enable "Pagar" button when form is valid', () => {
    const button = fixture.nativeElement.querySelector('.pay-button');
    
    expect(button.disabled).toBeFalsy();
  });

  it('should call "pay" when "Pagar" button is clicked', () => {
    spyOn(component, 'pay');

    const button = fixture.nativeElement.querySelector('.pay-button');

    button.click();

    
    expect(component.pay).toHaveBeenCalledWith();
  });

  describe('pay', () => {
    it('should call PaymentService.pay$ with correct values', () => {
      component.pay();

      expect(paymentService.pay$).toHaveBeenCalledWith({
        cardNumber: card.cardNumber,
        cvv: card.cvv,
        expiryDate: card.expiryDate,
        destinationUserId: component.user.id,
        value
      });
    });

    it('should call ModalRef.hide after payment result', () => {
      const spy = spyOn(component.modalRef, 'hide');
      
      component.pay();

      expect(spy).toHaveBeenCalled();
    });
  });
});
