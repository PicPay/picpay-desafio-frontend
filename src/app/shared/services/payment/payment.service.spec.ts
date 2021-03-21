import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material';

import { PaymentService } from './payment.service';

xdescribe('PaymentService', () => {
  let matDialogSpy: jasmine.SpyObj<MatDialog>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: PaymentService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    TestBed.configureTestingModule({
      providers: [
        { provide: MatDialog, useValue: matDialogSpy },
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });

    service = TestBed.get(PaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
