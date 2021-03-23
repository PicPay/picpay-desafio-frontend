import { Injectable, OnInit, Type } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService implements OnInit {
  activeModal$: Observable<Type<any>>;

  constructor() { }

  ngOnInit() {
    console.log(1)
  }

  open() {}

  getActiveModal$(): Observable<Type<any>> { return this.activeModal$ }
}
