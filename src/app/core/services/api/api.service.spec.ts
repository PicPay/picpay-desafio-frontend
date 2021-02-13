import { CoreModule } from './../../core.module';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiService } from '@core/services/api/api.service';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });

    apiService = TestBed.get(ApiService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should send http get method', () => {
    apiService
      .list<[{ id: number }]>('someUrl')
      .subscribe((result) => expect(result).toEqual([{ id: 1 }]));

    const request = httpTestingController.expectOne('someUrl');

    expect(request.request.method).toEqual('GET');

    request.flush([{ id: 1 }]);
  });

  it('should send http post method', () => {
    apiService
      .post<{ id: number } | { payload: { id: number } }>('someUrl', { id: 1 })
      .subscribe((result) => expect(result).toEqual({ payload: { id: 1 } }));

    const request = httpTestingController.expectOne('someUrl');

    expect(request.request.method).toEqual('POST');

    request.flush({ payload: { id: 1 } });
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
