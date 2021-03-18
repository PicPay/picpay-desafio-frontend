import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsDialogComponent } from './transactions-dialog.component';

describe('PayDialogComponent', () => {
  let component: TransactionsDialogComponent;
  let fixture: ComponentFixture<TransactionsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
