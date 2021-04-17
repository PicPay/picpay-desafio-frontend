import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDomainComponent } from './ngx-domain.component';

describe('NgxDomainComponent', () => {
  let component: NgxDomainComponent;
  let fixture: ComponentFixture<NgxDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDomainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
