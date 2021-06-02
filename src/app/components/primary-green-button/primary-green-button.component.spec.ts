import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryGreenButtonComponent } from './primary-green-button.component';

describe('PrimaryGreenButtonComponent', () => {
  let component: PrimaryGreenButtonComponent;
  let fixture: ComponentFixture<PrimaryGreenButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryGreenButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryGreenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
