import { HttpClient } from '@angular/common/http';
import { Card } from './card.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseCard = "https://run.mocky.io/v3/e42f0df3-891c-4a0a-83d7-3517288592cc"

  constructor(private http: HttpClient) { }

  showOnConsole(msg: string): void {
    console.log(msg)
  }

  readCard(): Observable<Card[]> {
    return this.http.get<Card[]>(this.baseCard)
  }
}
