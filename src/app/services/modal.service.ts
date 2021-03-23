import { Injectable, OnInit, Type } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  activeModalSubject$: Subject<Type<any>>;
  activeModal$: Observable<Type<any>>;

  constructor() {
    this.activeModalSubject$ = new Subject<Type<any>>();
    this.activeModal$ = this.activeModalSubject$.asObservable();
  }

  open(type: Type<any>) {
    this.activeModalSubject$.next(type);
  }

  getActiveModal$(): Observable<Type<any>> { return this.activeModal$ }
}
