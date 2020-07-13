import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCommonComponent } from './button-common.component';

describe('ButtonCommonComponent', () => {
  let component: ButtonCommonComponent;
  let fixture: ComponentFixture<ButtonCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
