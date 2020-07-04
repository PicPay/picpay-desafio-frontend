import { TestBed } from '@angular/core/testing';

import { DialogService } from './dialog.service';
import { MatDialogModule, MatDialogRef } from '@angular/material';
import { DialogData } from './dialog-data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { DialogComponent } from './dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserEntity } from '../../../../core/entities/user-entity';
import { of } from 'rxjs';

class MatDialogRefMock {

  close(result) {
    return of(result);
  }

  afterOpened() {
    return of();
  }
}

describe('DialogService', () => {
  let service: DialogService;

  beforeEach(() => {
    const spyDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatDialogModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: spyDialogRef },
      ],
      declarations: [DialogComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [DialogComponent]
      }
    });

    service = TestBed.get(DialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should alert', () => {
    const data = new DialogData();

    service.alert(data);

    expect(service.dialogRef).toBeTruthy();
  });

  it('should open payment', () => {
    const user = new UserEntity();
    const data = new DialogData();

    service.openPayment(user, data);

    expect(service.dialogRef).toBeTruthy();
  });
});
