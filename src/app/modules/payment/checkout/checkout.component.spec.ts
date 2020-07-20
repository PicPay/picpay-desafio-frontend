import { UserService } from './../user/user.service';
import { User } from './../user/user.model';
import { MaskNumber } from './../card/card.pipe';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  let user: User;

  let service: UserService;

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

    service = TestBed.get(UserService);

    user = {
      id: 1,
      name: 'Nome',
      img: 'Imagem',
      username: 'Nome de usuário'
    };

    service.setCurrentUser(user).subscribe();
  });

  it('deve criar', () => {
    expect(component).toBeDefined();
  });

  describe('verifica conteúdo exibido no HTML', () => {
    it('deve ter um nome', async(() => {
      fixture.detectChanges();

      const DE = fixture.debugElement.query(By.css('.full')).nativeElement;

      expect(DE.innerText).toContain('Nome');
    }));

    it('deve ter um nome de usuário', () => {
      fixture.detectChanges();

      const DE = fixture.debugElement.query(By.css('.username')).nativeElement;

      expect(DE.innerText).toContain('Nome de usuário');
    });

    it('deve ter uma imagem', () => {
      fixture.detectChanges();

      const DE = fixture.debugElement.query(By.css('.picture>img')).nativeElement;

      expect(DE.src).toContain('Imagem');
    });

    it('deve remover o disabled do botão quando o usuário digitar o valor e tiver cartão', () => {
      component.canPay = true;

      fixture.detectChanges();

      const BUTTON = fixture.debugElement.query(By.css('.btn-primary')).nativeElement;

      expect(BUTTON.disabled).toEqual(false);
    });
  });
});
