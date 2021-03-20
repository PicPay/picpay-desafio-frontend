import { HttpClient } from '@angular/common/http';
import { Card } from './card.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseCard = "https://run.mocky.io/v3/7062ba26-2d0c-427d-919e-c9a99a81c52d"

  constructor(private http: HttpClient) { }

  showOnConsole(msg: string): void {
    console.log(msg)
  }

  readCard(): Observable<Card[]> {
    return this.http.get<Card[]>(this.baseCard)
  }
}
