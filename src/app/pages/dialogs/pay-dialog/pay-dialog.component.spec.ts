import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayDialogComponent } from './pay-dialog.component';

describe('PayDialogComponent', () => {
  let component: PayDialogComponent;
  let fixture: ComponentFixture<PayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
