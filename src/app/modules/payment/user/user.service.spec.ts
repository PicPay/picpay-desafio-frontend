import { User } from './user.model';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';

import { UserService } from './user.service';
import { Router } from '@angular/router';

describe('UserService', () => {
  let service: UserService;
  let users: User[];
  let user: User;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        }
      ]
    });

    service = TestBed.get(UserService);

    user = {
      id: 1,
      name: 'Bernardo',
      img: 'Imagem',
      username: 'bernardosm',
    };
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve ter pelo menos um usuário', async(() => {
    service.read().subscribe(userList => {
      users = userList;
      expect(users.length).toBeGreaterThanOrEqual(1);
    });
  }));

  it('deve atualizar o usuário que vai receber o pagamento', async(() => {
    service.setCurrentUser(user);

    service.getCurrentUser().subscribe(storedUser => {
      expect(user).toEqual(storedUser);
    });
  }));
});
