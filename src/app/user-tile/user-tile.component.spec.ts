import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTileComponent } from './user-tile.component';

describe('UserTileComponent', () => {
  let component: UserTileComponent;
  let fixture: ComponentFixture<UserTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
