import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs';
import { CardModel } from 'src/app/models/card-model';
import { CardService } from 'src/app/services/card.service';

import { PaymentModalComponent } from './payment-modal.component';

describe('PaymentModalComponent', () => {
  let component: PaymentModalComponent;
  let fixture: ComponentFixture<PaymentModalComponent>;
  let cardService: jasmine.SpyObj<CardService>;
  let cards: CardModel[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentModalComponent ],
      providers: [
        { provide: CardService, useFactory: () => spyOnClass(CardService) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentModalComponent);
    cardService = TestBed.get(CardService)
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
    cardService.getCards$.and.returnValue(of(cards));

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
});
