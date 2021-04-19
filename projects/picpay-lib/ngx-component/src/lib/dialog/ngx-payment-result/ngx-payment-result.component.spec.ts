import { ComponentFixture, TestBed, TestBedStatic } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  failPaymentTransactionResultMock,
  IPaymentTransactionResult,
  successPaymentTransactionResultMock,
} from '@picpay-lib/ngx-domain';

import { NgxPaymentResultComponent } from './ngx-payment-result.component';

describe('NgxPaymentResultComponent', () => {
  let component: NgxPaymentResultComponent;
  let fixture: ComponentFixture<NgxPaymentResultComponent>;
  const dialogRefStub = { close: () => false };

  const configureTestingModule = (paymentResult: IPaymentTransactionResult): TestBedStatic => {
    return TestBed.configureTestingModule({
      declarations: [NgxPaymentResultComponent],
      imports: [MatDialogModule, MatButtonModule, NoopAnimationsModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: { ...dialogRefStub },
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: paymentResult,
        },
      ],
    });
  };

  const createComponent = () => {
    fixture = TestBed.createComponent(NgxPaymentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  describe('Success payment', () => {
    beforeEach(async () => {
      await configureTestingModule(successPaymentTransactionResultMock).compileComponents();
    });

    beforeEach(() => {
      createComponent();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should get the correct success message', () => {
      const element = fixture.debugElement.query(By.css('mat-dialog-content p')).nativeElement;
      expect(element.textContent).toEqual('O pagamento foi concluido com sucesso.');
    });
  });

  describe('Fail payment', () => {
    beforeEach(async () => {
      await configureTestingModule(failPaymentTransactionResultMock).compileComponents();
    });

    beforeEach(() => {
      createComponent();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should get the fail success message', () => {
      const element = fixture.debugElement.query(By.css('mat-dialog-content p')).nativeElement;
      expect(element.textContent).toEqual('O pagamento não foi concluido com sucesso.');
    });
  });
});
