import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing'
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material'
import { PaymentService } from '../services/payment.service'

import { UsersListComponent } from './users-list.component'

describe('UsersListComponent', () => {
  let component: UsersListComponent
  let fixture: ComponentFixture<UsersListComponent>
  const mockDialogRef = {
    open: jasmine.createSpy('open'),
    close: jasmine.createSpy('close'),
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListComponent],
      imports: [MatDialogModule, HttpClientTestingModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockDialogRef,
        },

        { provide: MAT_DIALOG_DATA, useValue: {} },
        PaymentService,
      ],
    }).compileComponents()
  }))
  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent)
    component = fixture.componentInstance
    component.ngOnInit()
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('should list user from api', inject(
    [PaymentService],
    async (serviceMock: PaymentService) => {
      let mock: any = {
        id: 1001,
        name: 'Eduardo Santos',
        username: '@eduardo.santos',
        img: 'img',
      }

      expect(serviceMock.listUser()).not.toBeNull()

      serviceMock.listUser().subscribe((res) => {
        expect(res[0].id).toEqual(mock[0].id)
        expect(res[0].name).toEqual(mock[0].name)
        expect(res[0].username).toEqual(mock[0].username)
        expect(res[0].img).toEqual(mock[0].img)
      })
    },
  ))
})
