import { TestBed } from '@angular/core/testing';

import { AlertsService } from './alerts.service';
import { ToastrModule } from 'ngx-toastr';
import { customNgxToastrConfig } from 'src/app/configs/ngx-toastr';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';

describe('AlertsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [BsModalService, BsModalRef],
      imports: [
        ModalModule.forRoot(),
        ToastrModule.forRoot(customNgxToastrConfig),
      ],
    }),
  );

  it('should be created', () => {
    const service: AlertsService = TestBed.get(AlertsService);
    expect(service).toBeTruthy();
  });
});
