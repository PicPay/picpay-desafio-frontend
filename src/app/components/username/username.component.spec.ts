import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameComponent } from './username.component';

describe('UsernameComponent', () => {
  let component: UsernameComponent;
  let fixture: ComponentFixture<UsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
