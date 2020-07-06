import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPayDialogComponent } from './users-pay-dialog.component';

describe('UsersPayDialogComponent', () => {
  let component: UsersPayDialogComponent;
  let fixture: ComponentFixture<UsersPayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersPayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
