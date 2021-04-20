import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { NgxSkeletonUserCardComponent } from './ngx-skeleton-user-card.component';

describe('NgxSkeletonUserCardComponent', () => {
  let component: NgxSkeletonUserCardComponent;
  let fixture: ComponentFixture<NgxSkeletonUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxSkeletonUserCardComponent],
      imports: [NgxSkeletonLoaderModule, MatCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSkeletonUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
