import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private displayModal: BehaviorSubject<'open' | 'close'> = new BehaviorSubject('close');

  constructor() { }

  watch(): Observable<'open' | 'close'> {
    return this.displayModal.asObservable();
  }

  open() {
    this.displayModal.next('open');
  }

  close() {
    this.displayModal.next('close');
  }
}
