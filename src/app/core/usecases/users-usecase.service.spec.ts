import { TestBed } from '@angular/core/testing';

import { UsersUsecaseService } from './users-usecase.service';
import { IUsersRepository } from '../interface/repositories/iusers-repository';

describe('UsersUsecaseService', () => {
  let service: UsersUsecaseService;
  let usersRepository: IUsersRepository;

  beforeEach(() => {
    const spyUsersRepository = jasmine.createSpyObj('IUsersRepository', ['get']);

    TestBed.configureTestingModule({
      providers: [
        { provide: IUsersRepository, useValue: spyUsersRepository }
      ]
    });

    service = TestBed.get(UsersUsecaseService);
    usersRepository = TestBed.get(IUsersRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get', () => {
    service.get();

    expect(usersRepository.get).toHaveBeenCalled();
  });
});
