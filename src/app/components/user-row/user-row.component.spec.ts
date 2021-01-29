import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRowComponent } from './user-row.component';
import { AvatarComponent } from '../avatar/avatar.component';

describe('UserRowComponent', () => {
  let component: UserRowComponent;
  let fixture: ComponentFixture<UserRowComponent>;
  const user = { "id": 1001, "name": "Eduardo Santos", "img": "https://randomuser.me/api/portraits/men/9.jpg", "username": "@eduardo.santos" };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRowComponent,AvatarComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRowComponent);
    component = fixture.componentInstance;
    component.user = user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
