import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReadComponent } from './user-read.component';

describe('UserReadComponent', () => {
  let component: UserReadComponent;
  let fixture: ComponentFixture<UserReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
