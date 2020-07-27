import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UsersComponent,
        UserComponent,
        PaymentComponent,
        ReceiptComponent
      ],
      providers: [
        NgbActiveModal
      ],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgxCurrencyModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Desafio Picpay Front-end'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Desafio Picpay Front-end');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Desafio Picpay Front-end app is running!');
  });
});
