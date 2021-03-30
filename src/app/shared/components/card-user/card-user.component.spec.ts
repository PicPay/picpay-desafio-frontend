import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CardUserComponent } from './card-user.component';
import { CardUserModule } from './card-user.module';

describe('CardUserComponent', () => {
  let component: CardUserComponent;
  let fixture: ComponentFixture<CardUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CardUserModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUserComponent);
    component = fixture.componentInstance;

    component.user = {
      id: 1,
      name: 'Test 1',
      username: '@test1',
      img: 'http://test1.png',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create snapshot with user', () => {
    expect(fixture).toMatchSnapshot('with_user');
  });

  it('should create snapshot without user', () => {
    component.user = null;

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot('without_user');
  });
});
