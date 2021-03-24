import { Injectable, OnInit, Type } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  activeModalSubject$: Subject<{type: Type<any>, data: any}>;
  activeModal$: Observable<{type: Type<any>, data: any}>;

  constructor() {
    this.activeModalSubject$ = new Subject<{type: Type<any>, data: any}>();
    this.activeModal$ = this.activeModalSubject$.asObservable();
  }

  open(type: Type<any>, data: any = {}) {
    this.activeModalSubject$.next({ type, data});
  }

  getActiveModal$(): Observable<{type: Type<any>, data: any}> { return this.activeModal$ }
}
