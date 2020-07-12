import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPhotoComponent } from './user-photo.component';

describe('UserPhotoComponent', () => {
  let component: UserPhotoComponent;
  let fixture: ComponentFixture<UserPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
