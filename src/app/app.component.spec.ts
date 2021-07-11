import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserListComponent,
        PaymentModalComponent,
      ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        NgxCurrencyModule      
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  
});
