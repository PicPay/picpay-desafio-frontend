import { HttpClientModule } from '@angular/common/http';
import { User } from './user.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let users: User[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule],
      providers: [
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        }
      ]
    });

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;

    users = [
      {
        id: 1,
        name: 'Nome',
        img: 'Imagem',
        username: 'Nome de usuário'
      }
    ];

    component.users = users;
    component.loading = false;
  });

  it('deve criar', () => {
    expect(component).toBeDefined();
  });

  it('deve renderizar pelo menos um usuário', () => {
    fixture.detectChanges();

    expect(component.users.length).toBeGreaterThanOrEqual(1, 'Quantidade de usuários após a listagem');
  });
});
