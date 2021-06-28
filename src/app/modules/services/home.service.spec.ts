import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from 'src/app/core/http.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { httpServiceStub } from 'src/mock/tests/http-service';

import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;

  beforeEach(() => 
    TestBed.configureTestingModule({
      providers: [HomeService]
    })
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[SharedModule, HttpClientModule],
      providers: [HomeService,{provide: HttpService, useValue: httpServiceStub}]
    });
    service = TestBed.get(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
