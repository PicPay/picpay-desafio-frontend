import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxComponentComponent } from './ngx-component.component';

describe('NgxComponentComponent', () => {
  let component: NgxComponentComponent;
  let fixture: ComponentFixture<NgxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
