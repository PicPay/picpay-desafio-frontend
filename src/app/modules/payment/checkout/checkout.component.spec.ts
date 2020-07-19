import { MaskNumber } from './../card/card.pipe';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckoutComponent,
        MaskNumber
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule],
      providers: [
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        },
        MatSnackBar,
        Overlay
      ]
    });

    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
  });

  it('deve criar', () => {
    expect(component).toBeDefined();
  });

  describe('verifica conteúdo exibido no HTML', () => {
    it('deve ter um nome', () => {
      fixture.detectChanges();

      const de = fixture.debugElement.query(By.css('.full')).nativeElement;

      expect(de.innerText).toContain('Bernardo');
    });

    it('deve ter um nome de usuário', () => {
      fixture.detectChanges();

      const de = fixture.debugElement.query(By.css('.username')).nativeElement;

      expect(de.innerText).toContain('bernardosm');
    });

    it('deve ter uma imagem', () => {
      fixture.detectChanges();

      const de = fixture.debugElement.query(By.css('.picture>img')).nativeElement;

      expect(de.src).toContain('Imagem');
    });

    it('deve remover o disabled do botão quando o usuário digitar o valor', () => {
      component.checkout.value = 1;
      component.valueChange();

      fixture.detectChanges();

      const button = fixture.debugElement.query(By.css('.btn-primary')).nativeElement;

      expect(button.disabled).toEqual(false);
    });
  });
});
