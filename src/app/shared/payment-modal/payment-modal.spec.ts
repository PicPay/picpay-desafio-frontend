import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material'

import { PaymentService } from 'src/app/payments/services/payment.service'
import { PaymentModalComponent } from './payment-modal.component'
import { ErrorModalComponent } from '../error-modal/error-modal.component'

describe('PaymentModalComponent', () => {
  let component: PaymentModalComponent
  let fixture: ComponentFixture<PaymentModalComponent>
  let service: PaymentService

  const mockDialogRef = {
    close: jasmine.createSpy('close'),
    open: jasmine.createSpy('open'),
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockDialogRef,
        },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: HttpClientTestingModule },
        PaymentService,
        HttpTestingController,
      ],
      declarations: [PaymentModalComponent, ErrorModalComponent],
    })
      .overrideModule(BrowserDynamicTestingModule, {
        set: { entryComponents: [ErrorModalComponent] },
      })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentModalComponent)
    component = fixture.componentInstance
    service = TestBed.get(PaymentService)
    component.ngOnInit()
    fixture.detectChanges()
  })
  it('should created', () => {
    expect(component).toBeTruthy()
  })
  it('form invalid when empty', () => {
    expect(component.paymentForm.valid).toBeFalsy()
  })
  it('payment field validity', () => {
    let errors = {}
    let payment_value = component.paymentForm.controls['payment_value']

    // payment field is not valid
    expect(payment_value.valid).toBeFalsy()

    // payment field is required
    errors = payment_value.errors || {}
    expect(errors['required']).toBeTruthy()

    // payment field min errors
    payment_value.setValue(0)
    errors = payment_value.errors || {}
    expect(errors['min']).toBeTruthy()

    // payment field is correct
    payment_value.setValue(1000)
    errors = payment_value.errors || {}
    expect(errors['required']).toBeFalsy()
    expect(errors['min']).toBeFalsy()
  })

  it('card field validity', () => {
    let errors = {}
    let payment_card = component.paymentForm.controls['payment_card']

    // card field is not valid
    errors = payment_card.errors || {}
    expect(payment_card.valid).toBeFalsy()

    // card field is required
    errors = payment_card.errors || {}
    expect(errors['required']).toBeTruthy()

    //card field is correct
    payment_card.setValue('1111111111111111')
    errors = payment_card.errors || {}
    expect(errors['required']).toBeFalsy()
  })

  it('destination_user_id field validity', () => {
    let errors = {}
    let destination_user_id =
      component.paymentForm.controls['destination_user_id']

    // destination_user_id is not valid
    errors = destination_user_id.errors || {}
    expect(destination_user_id.valid).toBeFalsy()

    // destination_user_id is required
    errors = destination_user_id.errors || {}
    expect(errors['required']).toBeTruthy()

    // destination_user_id is correct
    destination_user_id.setValue('10001')
    errors = destination_user_id.errors || {}
    expect(errors['required']).toBeFalsy()
  })
  it('cvv field validity', () => {
    let errors = {}
    let cvv = component.paymentForm.controls['cvv']
    // cvv is not valid
    errors = cvv.errors || {}
    expect(cvv.valid).toBeFalsy()

    // cvv is required
    errors = cvv.errors || {}
    expect(errors['required']).toBeTruthy()

    // cvv is correct
    cvv.setValue(789)
    errors = cvv.errors || {}
    expect(errors['required']).toBeFalsy()
  })
  it('expiry_date validity', () => {
    let errors = {}
    let expiry_date = component.paymentForm.controls['expiry_date']

    //expiry_date is not valid
    errors = expiry_date.errors || {}
    expect(expiry_date.valid).toBeFalsy()

    //expiry_date is required
    errors = expiry_date.errors || {}
    expect(errors['required']).toBeTruthy()

    //expiry_date is correct
    expiry_date.setValue('01/18')
    errors = expiry_date.errors || {}
    expect(errors['required']).toBeFalsy()
  })
  it('submitting a form for payment with a valid card', () => {
    component.paymentForm.controls['payment_value'].setValue(1000)
    component.paymentForm.controls['payment_card'].setValue('1111111111111111')
    component.paymentForm.controls['destination_user_id'].setValue('1001')
    component.paymentForm.controls['cvv'].setValue(789)
    component.paymentForm.controls['expiry_date'].setValue('01/18')
    expect(component.paymentForm.valid).toBeTruthy()
    component.onSubmit()
    service.payment(component.paymentForm.value)
    mockDialogRef.open()
    expect(mockDialogRef.open).toHaveBeenCalled()
  })
  it('submitting a form for payment with a invalid card', () => {
    component.paymentForm.controls['payment_value'].setValue(1000)
    component.paymentForm.controls['payment_card'].setValue('4111111111111234')
    component.paymentForm.controls['destination_user_id'].setValue('1001')
    component.paymentForm.controls['cvv'].setValue(123)
    component.paymentForm.controls['expiry_date'].setValue('01/20')
    expect(component.paymentForm.valid).toBeTruthy()
    component.onSubmit()
    mockDialogRef.open()
    expect(mockDialogRef.open).toHaveBeenCalled()
  })
})
