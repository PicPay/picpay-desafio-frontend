import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {PaymentResultDialogComponent} from './payment-result-dialog.component';

describe('PaymentResultDialogComponent', () => {
  let component: PaymentResultDialogComponent;
  let fixture: ComponentFixture<PaymentResultDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
        { provide: MatDialogRef, useValue: {} },
      ],
      declarations: [PaymentResultDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display success when data.success is true', () => {
    component.data.success = true;
    fixture.detectChanges();

    const successSvgLines = fixture.nativeElement.querySelector(
      '.line-a, .line-b'
    );
    const failSvgLines = fixture.nativeElement.querySelector('.line-cross');
    const circle: SVGElement = fixture.nativeElement.querySelector('.circle');
    const resultText: HTMLElement = fixture.nativeElement.querySelector(
      '.result-text'
    );

    expect(successSvgLines).toBeTruthy();
    expect(failSvgLines).toBeFalsy();
    expect(circle.classList.contains('success')).toBeTruthy();
    expect(resultText.classList.contains('success')).toBeTruthy();
    expect(resultText.textContent.trim()).toBe(
      'O pagamento foi concluído com sucesso'
    );
  });

  it('should display failure when data.success is false', () => {
    component.data.success = false;
    fixture.detectChanges();

    const successSvgLines = fixture.nativeElement.querySelector(
      '.line-a, .line-b'
    );
    const failSvgLines = fixture.nativeElement.querySelector('.line-cross');
    const circle: SVGElement = fixture.nativeElement.querySelector('.circle');
    const resultText: HTMLElement = fixture.nativeElement.querySelector(
      '.result-text'
    );

    expect(successSvgLines).toBeFalsy();
    expect(failSvgLines).toBeTruthy();
    expect(circle.classList.contains('fail')).toBeTruthy();
    expect(resultText.classList.contains('fail')).toBeTruthy();
    expect(resultText.textContent.trim()).toBe(
      'Não foi possível concluir o pagamento'
    );
  });
});
