import { TestBed } from '@angular/core/testing';
import { CardModel } from '../models/card-model';

import { CardService } from './card.service';

describe('CardService', () => {
  let service: CardService;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of cards', () => {
    const spy = jasmine.createSpy('spy');

    service.getCards$().subscribe(spy);
    
    expect(spy).toHaveBeenCalledWith(service.cards);
  });
});
