import { MatSnackBar } from '@angular/material/snack-bar';
import { MaskNumber } from './card.pipe';
import { Card } from './card.model';
import { TestBed, async } from '@angular/core/testing';

import { CardService } from './card.service';
import { Overlay } from '@angular/cdk/overlay';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardService', () => {
  let service: CardService;
  let card: Card;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MaskNumber
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        MatSnackBar,
        Overlay
      ]
    });

    service = TestBed.get(CardService);

    card = {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18'
    };
  });

  it('deve criar', () => {
    expect(service).toBeTruthy();
  });

  it('deve cadastrar um cartao', async(() => {
    service.create(card).subscribe(() => {
      service.read().subscribe(cards => {
        expect(cards.length).toBeGreaterThanOrEqual(1);
      });
    });
  }));

  it('deve atualizar o cartão de pagamento', async(() => {
    service.setCurrentCard(card).subscribe(() => {
      service.getCurrentCard().subscribe(storedCard => {
        expect(storedCard).toEqual(card);
      });
    });
  }));

  it('deve atualizar o cartão de pagamento se existir um cartão', async(() => {
    service.create(card).subscribe(() => {
      service.getCurrentCard().subscribe(storedCard => {
        expect(storedCard).toEqual(card);
      });
    });
  }));
});
