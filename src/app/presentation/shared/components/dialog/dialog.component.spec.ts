import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { MatDialogModule, MatToolbarModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from './dialog-data';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let matDialogRef: MatDialogRef<any>;

  beforeEach(async(() => {
    const spyMatDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    TestBed.configureTestingModule({
      declarations: [
        DialogComponent
      ],
      imports: [
        MatDialogModule,
        MatToolbarModule
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA, useValue: {}
        },
        {
          provide: MatDialogRef, useValue: spyMatDialogRef
        }
      ]
    });

    matDialogRef = TestBed.get(MatDialogRef);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should instance component', () => {
    spyOn(component, 'createComponent').and.returnValue({
      dialogRef: {},
      data: {}
    });

    component.data = new DialogData();
    component.data.component = {};

    component.instanceComponent();

    expect(matDialogRef).toBeTruthy();
  });

  it('should close', () => {
    component.close();

    expect(matDialogRef.close).toHaveBeenCalled();
  });
});
