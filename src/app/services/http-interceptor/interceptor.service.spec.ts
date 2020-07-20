import { TestBed } from '@angular/core/testing';

import { InterceptorService } from './interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { customNgxToastrConfig } from 'src/app/configs/ngx-toastr';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

describe('InterceptorService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [BsModalService, BsModalRef, InterceptorService],
      imports: [
        ModalModule.forRoot(),
        ToastrModule.forRoot(customNgxToastrConfig),
      ],
    }),
  );

  it('should be created', () => {
    const service: InterceptorService = TestBed.get(InterceptorService);
    expect(service).toBeTruthy();
  });
});
