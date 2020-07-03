import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubtitleComponent } from './user-subtitle.component';

describe('UserSubtitleComponent', () => {
  let component: UserSubtitleComponent;
  let fixture: ComponentFixture<UserSubtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSubtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
