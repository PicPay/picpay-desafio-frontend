import { TestBed } from '@angular/core/testing';
import { HttpService } from 'src/app/core/http.service';

import { HomeService } from './home.service';

describe('HomeService', () => {
  beforeEach(() => 
    TestBed.configureTestingModule({
      providers: [HomeService]
    })
  );

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [{provide: HttpService}]
  //   });
  //   service: TestBed.inject()
  // });

  it('should be created', () => {
    const service: HomeService = TestBed.get(HomeService);
    expect(service).toBeTruthy();
  });
});
