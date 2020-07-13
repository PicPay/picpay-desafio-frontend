import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from './users.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ UsersService ],
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
});
