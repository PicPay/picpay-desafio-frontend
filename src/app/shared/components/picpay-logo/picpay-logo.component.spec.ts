import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicPayLogoComponent } from './picpay-logo.component';

describe('PicPayLogoComponent', () => {
  let component: PicPayLogoComponent;
  let fixture: ComponentFixture<PicPayLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PicPayLogoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicPayLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
