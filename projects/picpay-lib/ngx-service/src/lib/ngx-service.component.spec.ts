import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxServiceComponent } from './ngx-service.component';

describe('NgxServiceComponent', () => {
  let component: NgxServiceComponent;
  let fixture: ComponentFixture<NgxServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
