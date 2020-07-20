import { GlobalConfig } from 'ngx-toastr';

export const customNgxToastrConfig: Partial<GlobalConfig> = {
  maxOpened: 3,
  autoDismiss: true,
  progressBar: true,
  closeButton: true,
  timeOut: 3500,
  progressAnimation: 'decreasing',
};
