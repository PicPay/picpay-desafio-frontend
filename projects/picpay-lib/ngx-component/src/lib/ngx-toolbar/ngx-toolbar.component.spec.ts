import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgxToolbarComponent } from './ngx-toolbar.component';

describe('NgxToolbarComponent', () => {
  let component: NgxToolbarComponent;
  let fixture: ComponentFixture<NgxToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxToolbarComponent],
      imports: [MatToolbarModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
