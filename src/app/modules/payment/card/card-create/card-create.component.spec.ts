import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { Card } from './../card.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreateComponent } from './card-create.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Overlay } from '@angular/cdk/overlay';

describe('CardCreateComponent', () => {
  let component: CardCreateComponent;
  let fixture: ComponentFixture<CardCreateComponent>;

  let card: Card;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCreateComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        },
        MatSnackBar,
        Overlay
      ]
    });

    fixture = TestBed.createComponent(CardCreateComponent);
    component = fixture.componentInstance;

    card = {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18'
    };

    component.card = card;
  });

  it('deve criar', () => {
    expect(component).toBeDefined();
  });

  it('deve remover o disabled do botão quando todos os campos forem preenchidos', () => {
    component.verifyFields();

    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('.btn-primary')).nativeElement;

    expect(button.disabled).toEqual(false);
  });
});
