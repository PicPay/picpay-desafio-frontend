import { Injectable, Type } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  open() {}

  getActiveModal$(): Observable<Type<any>> { return of(null) }
}
