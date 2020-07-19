import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsInputComponent } from './errors-input.component';

describe('ErrorsInputComponent', () => {
  let component: ErrorsInputComponent;
  let fixture: ComponentFixture<ErrorsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
