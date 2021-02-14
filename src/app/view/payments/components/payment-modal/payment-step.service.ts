import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

type stepType = 'selectAmount' | 'confirmData' | 'success' | 'error';


@Injectable({
  providedIn: 'root'
})
export class PaymentStepService {
  private activeStep = new BehaviorSubject<stepType>('selectAmount');

  constructor() { }

  getActiveStep(): Observable<stepType> {
    return this.activeStep.asObservable();
  }

  setActiveStep(stepToActivate): void {
    this.activeStep.next(stepToActivate);
  }
}
