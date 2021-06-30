import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MatSelectModule, MAT_DIALOG_DATA } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { TransactionComponent } from './transaction.component';
import { User } from '@app/models/user/user.model';
import { By } from '@angular/platform-browser';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;

  let closeButton: HTMLElement;
  let confirmationButton: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatDialogModule,
        CurrencyMaskModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { user: {} as User }},
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    closeButton = fixture.debugElement.query(By.css('.modal__title > button')).nativeElement;
    confirmationButton = fixture.debugElement.query(By.css('.modal__content > button')).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Pay button should be enabled when card selected and value greater than 0', fakeAsync(() => {{
    component.cardControl.setValue({});
    component.transaction.value = 1;

    fixture.detectChanges();
    tick();

    expect(confirmationButton.disabled).toBe(false);
  }}));

  it('Pay button should be disabled when NO card selected and value greater than 0', fakeAsync(() => {{
    component.cardControl.setValue(null);
    component.transaction.value = 1;

    fixture.detectChanges();
    tick();

    expect(confirmationButton.disabled).toBe(true);
  }}));

  it('Pay button should be disabled when card selected and value NOT greater than 0', fakeAsync(() => {{
    component.cardControl.setValue({});
    component.transaction.value = 0;

    fixture.detectChanges();
    tick();

    expect(confirmationButton.disabled).toBe(true);
  }}));

  it('Pay button should be disabled when NO card selected and value NOT greater than 0', fakeAsync(() => {{
    component.cardControl.setValue(null);
    component.transaction.value = 0;

    fixture.detectChanges();
    tick();

    expect(confirmationButton.disabled).toBe(true);
  }}));

  it('Close button should close the modal on click', fakeAsync(() => {
    const closeModalSpy = spyOn(component, 'closeModal');

    closeButton.click();
    fixture.detectChanges();
    tick();

    expect(closeModalSpy).toHaveBeenCalled();
  }));

});
