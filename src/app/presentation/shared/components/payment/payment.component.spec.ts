import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentComponent } from './payment.component';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MAT_DIALOG_DATA,
  MatProgressSpinnerModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatorFieldMessageModule } from '../validator-field-message/validator-field-message.module';
import { ITransactionUsecase } from 'src/app/core/interface';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardEntity } from '../../../../core/entities/card-entity';
import { of, throwError } from 'rxjs';
import { DialogService } from '../dialog/dialog.service';
import { DialogModule } from '../dialog/dialog.module';
import { UserEntity } from '../../../../core/entities/user-entity';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;
  let transactionUsecase: jasmine.SpyObj<ITransactionUsecase>;
  let dialogService: DialogService;

  beforeEach(async(() => {
    const spyTransactionUsecase = jasmine.createSpyObj('ITransactionUsecase', ['transaction']);
    // const spyDialogService = jasmine.createSpyObj('DialogService', ['close', 'alert']);

    TestBed.configureTestingModule({
      declarations: [ PaymentComponent ],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        ValidatorFieldMessageModule,
        DialogModule
      ],
      providers: [
        DialogService,
        { provide: ITransactionUsecase, useValue: spyTransactionUsecase },
        // { provide: DialogService, useValue: spyDialogService },
        {
          provide: MAT_DIALOG_DATA, useValue: {}
        }
      ]
    })
    .compileComponents();

    transactionUsecase = TestBed.get(ITransactionUsecase);
    dialogService = TestBed.get(DialogService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    component.dialogData.data = new UserEntity();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onChange card', () => {
    const item = new CardEntity();

    item.card_number = '1111111111111111';
    item.cvv = 789;
    item.expiry_date = '01/18';

    component.onChangeCard(item);

    expect(component.form.get('card_number').value).toEqual(item.card_number);
    expect(component.form.get('cvv').value).toEqual(item.cvv);
    expect(component.form.get('expiry_date').value).toEqual(item.expiry_date);
  });

  it('should transaction form invalid', () => {
    spyOn(component.form, 'markAllAsTouched');

    component.createForm();

    component.transaction();

    expect(component.form.valid).toBeFalsy();
    expect(component.form.invalid).toBeTruthy();
  });

  it('should transaction return true', () => {
    spyOn(component, 'responseValidate');
    spyOn(component.form, 'markAllAsTouched');

    transactionUsecase.transaction.and.returnValue(of(true));

    component.createForm();

    component.form.setValue({
      card: true,
      card_number: '1111111111111111',
      cvv: 789,
      destination_user_id: 1015,
      expiry_date: '01/18',
      value: 1232.11
    });

    component.transaction();

    expect(component.form.valid).toBeTruthy();
    expect(component.form.invalid).toBeFalsy();
    expect(component.responseValidate).toHaveBeenCalledWith(true);
  });

  it('should transaction return false', () => {
    spyOn(component, 'responseValidate');

    transactionUsecase.transaction.and.returnValue(of(false));

    component.createForm();

    component.form.setValue({
      card: true,
      card_number: '4111111111111234',
      cvv: 123,
      destination_user_id: 1015,
      expiry_date: '01/20',
      value: 1232.11
    });

    component.transaction();

    expect(component.form.valid).toBeTruthy();
    expect(component.form.invalid).toBeFalsy();
    expect(component.responseValidate).toHaveBeenCalledWith(false);
  });

  it('should transaction return error', () => {
    spyOn(component, 'showAlert');

    transactionUsecase.transaction.and.returnValue(throwError(null));

    component.createForm();

    component.form.setValue({
      card: true,
      card_number: '4111111111111234',
      cvv: 123,
      destination_user_id: 1015,
      expiry_date: '01/20',
      value: 1232.11
    });

    component.transaction();

    expect(component.form.valid).toBeTruthy();
    expect(component.form.invalid).toBeFalsy();
    expect(component.showAlert).toHaveBeenCalledWith('O pagamento não foi concluido com sucesso.');
  });

  it('should response validate payment success', () => {
    spyOn(component, 'showAlert');

    component.responseValidate(true);

    expect(component.showAlert).toHaveBeenCalledWith('O pagamento foi concluido com sucesso.');
  });

  it('should response validate payment failed', () => {
    spyOn(component, 'showAlert');

    component.responseValidate(false);

    expect(component.showAlert).toHaveBeenCalledWith('O pagamento não foi concluido com sucesso.');
  });

  it('should show alert', () => {
    spyOn(dialogService, 'alert').and.returnValue(of(true));

    const message = 'Conteúdo de descrição';
    const alert = {
      title: 'Recibo de pagamento',
      description: message
    };

    component.showAlert(message);

    dialogService.alert(alert).subscribe(res => {
      expect(res).toBeTruthy();
    });

    expect(dialogService.alert).toHaveBeenCalledWith(alert);
  });

  it('should reset form', () => {
    component.createForm();

    component.form.setValue({
      card: true,
      card_number: '4111111111111234',
      cvv: 123,
      destination_user_id: 1015,
      expiry_date: '01/20',
      value: 1232.11
    });

    component.resetForm();

    expect(component.form.get('card').value).toBeNull();
    expect(component.form.get('card_number').value).toBeNull();
    expect(component.form.get('cvv').value).toBeNull();
    expect(component.form.get('expiry_date').value).toBeNull();
    expect(component.form.get('value').value).toBeNull();
  });
});
