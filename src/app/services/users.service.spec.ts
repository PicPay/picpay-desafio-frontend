import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ UsersService ],
    imports: [
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([])
    ]
  }));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
});
