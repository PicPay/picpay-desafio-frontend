import { MatCardModule } from '@angular/material/card';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from 'src/app/services/users.service';
import { of } from 'rxjs';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [
        MatCardModule,
        HttpClientTestingModule
      ],
      providers: [UsersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const userService = TestBed.get(UsersService);

    spyOn(userService, "getUsers").and.returnValue(
      of([
        {
          "id": 1001,
          "name": "Eduardo Santos",
          "img": "https://randomuser.me/api/portraits/men/9.jpg",
          "username": "@eduardo.santos"
        },
        {
          "id": 1002,
          "name": "Marina Coelho",
          "img": "https://randomuser.me/api/portraits/women/37.jpg",
          "username": "@marina.coelho"
        }
      ])
    );
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });
});
