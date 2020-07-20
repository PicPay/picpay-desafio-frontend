import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPictureComponent } from './user-picture.component';

describe('UserPictureComponent', () => {
  let component: UserPictureComponent;
  let fixture: ComponentFixture<UserPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
