import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTitleComponent } from './user-title.component';

describe('UserTitleComponent', () => {
  let component: UserTitleComponent;
  let fixture: ComponentFixture<UserTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
