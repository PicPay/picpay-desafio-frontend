import { async, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { UsersPayDialogComponent } from './users-pay-dialog/users-pay-dialog.component';

fdescribe('UsersComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UsersComponent,
        UsersPayDialogComponent
      ],
    }).compileComponents();
  }));

  it('should create the users', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
