import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_TRANSACTION_FORM_DATA } from '@shared/mocks/transaction/transaction-form.mock';
import { MOCK_TRANSACTION } from '@shared/mocks/transaction/transaction.mock';
import { MOCK_USER, MOCK_USERS } from '@shared/mocks/user/user.mock';
import { TransactionService } from '@shared/services/transaction/transaction.service';
import { UserService } from '@shared/services/user/user.service';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;

  let userServiceSpy: jasmine.SpyObj<UserService>;
  let transactionServiceSpy: jasmine.SpyObj<TransactionService>;

  beforeEach(async(() => {
    userServiceSpy = jasmine.createSpyObj('UserService', ['listUsers']);
    transactionServiceSpy = jasmine.createSpyObj('TransactionService', [
      'postTransaction',
    ]);

    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: TransactionService, useValue: transactionServiceSpy },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
      });
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should list users', () => {
    userServiceSpy.listUsers.and.returnValue(of(MOCK_USERS));
    fixture.detectChanges();

    const appUserCardList = debugElement.queryAll(By.css('app-user-card'));

    expect(appUserCardList.length).toBe(MOCK_USERS.length);
  });

  it('should post transaction', () => {
    component.selectedUser = MOCK_USER;
    transactionServiceSpy.postTransaction.and.returnValue(of(MOCK_TRANSACTION));
    fixture.detectChanges();
    component.sendTransaction(MOCK_TRANSACTION_FORM_DATA);
    fixture.detectChanges();
    expect(component.paidUsers.length).toBe(1);
  });
});
