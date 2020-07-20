import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDialogComponent } from './payment-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from '../loading/loading.module';
import { ErrorsInputModule } from '../errors-input/errors-input.module';
import { ToastrModule } from 'ngx-toastr';
import { customNgxToastrConfig } from 'src/app/configs/ngx-toastr';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';

describe('PaymentDialogComponent', () => {
  let component: PaymentDialogComponent;
  let fixture: ComponentFixture<PaymentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [BsModalService, BsModalRef],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        LoadingModule,
        HttpClientModule,
        ErrorsInputModule,
        ModalModule.forRoot(),
        ToastrModule.forRoot(customNgxToastrConfig),
      ],
      declarations: [PaymentDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
