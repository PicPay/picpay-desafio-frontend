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

    cards = [];
    cardService.getCards$.and.returnValue(of(cards));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call CardService.getCards$ when component starts', () => {
    expect(cardService.getCards$).toHaveBeenCalled();
  });
});
