import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material'

import { ErrorModalComponent } from './error-modal.component'

describe('ErrorModalComponent', () => {
  let component: ErrorModalComponent
  let fixture: ComponentFixture<ErrorModalComponent>

  const mockDialogRef = {
    close: jasmine.createSpy('close'),
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockDialogRef,
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
      declarations: [ErrorModalComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should created', () => {
    expect(component).toBeTruthy()
  })
  it('should close the dialog', () => {
    component.close()
    expect(mockDialogRef.close).toHaveBeenCalled()
  })
})
