import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayUsersComponent } from './pay-users.component';

describe('PayUsersComponent', () => {
  let component: PayUsersComponent;
  let fixture: ComponentFixture<PayUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
