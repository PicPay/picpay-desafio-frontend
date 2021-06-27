import { MatCardModule } from '@angular/material/card';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from 'src/app/core/services/users/users.service';
import { of } from 'rxjs';
import { MatDialogModule } from '@angular/material/dialog';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [MatCardModule, HttpClientTestingModule, MatDialogModule],
      providers: [UsersService],
    }).compileComponents();
  }));

  beforeEach(() => {
    const userService = TestBed.get(UsersService);

    spyOn(userService, 'getUsers').and.returnValue(
      of([
        {
          id: 1001,
          name: 'Eduardo Santos',
          img: 'https://randomuser.me/api/portraits/men/9.jpg',
          username: '@eduardo.santos',
        },
      ]),
    );
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should be create', () => {
    expect(component).toBeTruthy();
  });
});
