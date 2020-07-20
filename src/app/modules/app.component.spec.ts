import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { HeaderComponent } from './../core/header/header.component';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        PaymentComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule],
      providers: [
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('deve criar', () => {
    const APP = fixture.debugElement.componentInstance;
    expect(APP).toBeTruthy();
  });

  it(`deve ter o título 'Desafio Front-End'`, () => {
    const DE = fixture.debugElement.query(By.css('#header>.container>.text')).nativeElement;
    expect(DE.innerText).toContain('Desafio Front-End');
  });

  it('deve renderizar a logo', () => {
    const DE = fixture.debugElement.query(By.css('#header>.container>.logo')).nativeElement;
    expect(DE.src).toContain('assets/img/logo.png');
  });
});
