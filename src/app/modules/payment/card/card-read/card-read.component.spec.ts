import { MaskNumber } from './../card.pipe';
import { By } from '@angular/platform-browser';
import { Card } from './../card.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReadComponent } from './card-read.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Overlay } from '@angular/cdk/overlay';

describe('CardReadComponent', () => {
  let component: CardReadComponent;
  let fixture: ComponentFixture<CardReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardReadComponent,
        MaskNumber
      ],
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

    fixture = TestBed.createComponent(CardReadComponent);
    component = fixture.componentInstance;
  });

  it('deve criar', () => {
    expect(component).toBeDefined();
  });
});
