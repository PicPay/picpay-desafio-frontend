import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { httpServiceStub } from 'src/mock/tests/http-service';
import { MatDialogMock } from 'src/mock/tests/mat-dialog-stub';
import { AppComponent } from './app.component';
import { HttpService } from './core/http.service';
import { HomeModule } from './modules/home/home.module';
import { HomeService } from './modules/services/home.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        BrowserModule,
        NoopAnimationsModule,
        HttpClientModule,
        HomeModule,
        ReactiveFormsModule
      ],
      providers:[HomeService, {provide: MatDialog, useValue: MatDialogMock}, {provide: HttpService, useValue: httpServiceStub}],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'Desafio Picpay Front-end'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Desafio Picpay Front-end');
  // });
});
