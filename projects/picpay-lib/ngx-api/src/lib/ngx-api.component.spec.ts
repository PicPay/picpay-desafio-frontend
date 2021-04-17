import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxApiComponent } from './ngx-api.component';

describe('NgxApiComponent', () => {
  let component: NgxApiComponent;
  let fixture: ComponentFixture<NgxApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
