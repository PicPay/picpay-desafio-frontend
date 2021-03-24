import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CardModel } from '../models/card-model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards$(): Observable<CardModel[]> {
    return of(null);
  }
}
