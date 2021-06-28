import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from 'src/app/core/http.service';
import { HomeService } from 'src/app/modules/services/home.service';
import { httpServiceStub } from 'src/mock/tests/http-service';
import { SharedModule } from '../../shared.module';

import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[SharedModule, HttpClientModule, BrowserAnimationsModule],
      providers: [
        HomeService,
        {provide: MatDialogRef, useValue: []},
        MatSnackBar,
        FormBuilder,
        {provide: HttpService, useValue: httpServiceStub}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    component.user ={
      id: 1,
      img: '',
      username: '',
      name: '',
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
