import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownComponent } from './drop-down.component';

describe('DropDownComponent', () => {
  let component: DropDownComponent;
  let fixture: ComponentFixture<DropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
