import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardsComponent } from './credit-cards.component';
import { CreditCardsModule } from './credit-cards.module';

describe('CreditCardsComponent', () => {
  let component: CreditCardsComponent;
  let fixture: ComponentFixture<CreditCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CreditCardsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardsComponent);
    component = fixture.componentInstance;

    component.cards = [
      {
        id: 1,
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
      },
      {
        id: 2,
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
      },
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test on change card 1', () => {
    jest.spyOn(component.changeCard, 'emit');

    component.selectedCard = component.cards[0];
    component.onChange();

    expect(component.selectedCard).toEqual(component.cards[1]);
    expect(component.currentIndex).toEqual(1);
    expect(component.changeCard.emit).toBeCalledWith(component.cards[1]);
  });

  it('test on change card 0', () => {
    jest.spyOn(component.changeCard, 'emit');

    component.selectedCard = component.cards[1];
    component.onChange();

    expect(component.selectedCard).toEqual(component.cards[0]);
    expect(component.currentIndex).toEqual(0);
    expect(component.changeCard.emit).toBeCalledWith(component.cards[0]);
  });
});
